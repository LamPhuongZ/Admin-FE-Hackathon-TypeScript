import React, { useEffect, useState } from 'react';
import type { FormProps, TableProps } from 'antd';
import { Button, Flex, Form, Input, InputNumber, Modal, Popconfirm, Space, Table, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/configStore';
import { FaEdit } from 'react-icons/fa';
import { Excel } from 'antd-table-saveas-excel';
import { ColumnType } from 'antd/es/table';
import { createJobTypeAsyncAction, deleteJobTypeAsyncAction, getAllJobTypeAsyncAction, jobTypeApi, updateJobTypeAsyncAction } from '../../redux/reducers/jobTypeReducer';

// Định nghĩa kiểu cột cho Excel
interface IExcelColumn {
  title: string;
  dataIndex: string;
  key?: string;
}

interface DataType {
  stt?: number;
  id: number;
  name: string;
  description: string;
  minPrice: number;
  maxPrice: number
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: DataType;
  index: number;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  // Kiểm tra nếu là cột `stt` hoặc `id`, thì disable input
  // const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  const inputNode =
    dataIndex === 'stt' || dataIndex === 'id'
      ? <InputNumber disabled />
      : inputType === 'number'
        ? <InputNumber />
        : <Input.TextArea rows={4} style={{ height: 'auto' }} />; // Sử dụng TextArea cho chữ tự xuống dòng

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Vui lòng nhập ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};


const TypeJob: React.FC = () => {
  const { allJobType } = useSelector((state: RootState) => state.jobTypeReducer) as { allJobType: DataType[] };
  const dispatch: DispatchType = useDispatch();

  // ==== CALL API ⭐====
  const getDataListJobType = async (): Promise<void> => {
    const actionApi = getAllJobTypeAsyncAction();
    await dispatch(actionApi);
  };

  useEffect(() => {
    getDataListJobType();
  }, []);

  // Tạo stt và đảo ngược dữ liệu khi allJobType thay đổi
  useEffect(() => {
    if (allJobType && allJobType.length > 0) {
      const newData = allJobType
        .slice() // Tạo bản sao của allJobType để không thay đổi dữ liệu gốc
        .reverse() // Đảo ngược thứ tự của dữ liệu
        .map((item, index) => ({
          ...item,
          stt: index + 1,
        }));
      setData(newData);
    }
  }, [allJobType]);



  // ==== CALL API DELETE ⭐====
  const handleDelete = async (id: number) => {
    await dispatch(deleteJobTypeAsyncAction(id));
    // Gọi lại API để cập nhật danh sách người dùng sau khi xóa thành công
    await getDataListJobType();
  };

    // ==== CALL API UPDATE ⭐====
    const handleUpdate = async (rowFromData: jobTypeApi) => {
      await dispatch(updateJobTypeAsyncAction(rowFromData));
      // Gọi lại API để cập nhật danh sách người dùng sau khi xóa thành công
      await getDataListJobType();
    };

  // ======================================
  //             HANDLE MODEL
  // ======================================
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // ======================================
  //              HANDLE FORM
  // ======================================
  const [formCreate] = Form.useForm();

  const onFinish: FormProps<jobTypeApi>["onFinish"] = async (values: jobTypeApi) => {
      // ==== CALL API CREATE ⭐====
    await dispatch(createJobTypeAsyncAction(values));
    setIsModalOpen(false);
    formCreate.resetFields()
  };

  const onFinishFailed: FormProps<jobTypeApi>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };



  const [form] = Form.useForm();
  const [data, setData] = useState<DataType[]>([]);
  const [editingKey, setEditingKey] = useState<number | string>('');

  const isEditing = (record: DataType) => record.id === editingKey;

  const edit = (record: Partial<DataType> & { id: React.Key }) => {
    form.setFieldsValue({ stt: '', name: '', description: '', ...record });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  // ================================
  //            SAVE ⭐
  // ================================
  const save = async (id: React.Key) => {
    try {
      const row = (await form.validateFields()) as DataType;
      console.log("🚀 ~ file: TypeJob.tsx:144 ~ save ~ row:", row);
      // ==== CALL API UPDATE ⭐====
      handleUpdate(row)

      const newData = [...data];
      const index = newData.findIndex((item) => id === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Stt',
      dataIndex: 'stt',
      key: 'stt',
      width: 40,
      editable: true,
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: 40,
      editable: true,
    },
    {
      title: 'Tên loại công việc',
      dataIndex: 'name',
      key: 'name',
      width: 250,
      editable: true,
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      width: 500,
      editable: true,
    },
    {
      title: 'Giá thấp nhất',
      dataIndex: 'minPrice',
      key: 'minPrice',
      width: 110,
      editable: true,
      render: (text:number) => (
        <div>
          {text} <span>.000đ</span>
        </div>
      )
    },
    {
      title: 'Giá cao nhất',
      dataIndex: 'maxPrice',
      key: 'maxPrice',
      width: 100,
      editable: true,
      render: (text:number) => (
        <div>
          {text} <span>.000đ</span>
        </div>
      )
    },
    {
      title: 'Chỉnh sửa',
      width: 140,
      dataIndex: 'operation',
      render: (_: any, record: DataType) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.id)} style={{ marginInlineEnd: 8 }}>
              <Button className='bg-[#57c81f] text-white custom-button' >
                Lưu
              </Button>
            </Typography.Link>

            <Popconfirm title="Bạn có muốn hủy?" onConfirm={cancel}>
              <Button type='primary' danger>
                Hủy
              </Button>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link className='flex justify-center' disabled={editingKey !== ''} onClick={() => edit(record)}>
            <Button type="primary">
              <FaEdit className='inline-block me-[6px] text-xl' /> Sửa
            </Button>
          </Typography.Link>
        );
      },
    },
    {
      title: 'Xóa Kỹ năng',
      dataIndex: 'delete',
      key: 'delete',
      width: 100,
      render: (_: any, record: DataType) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" danger onClick={() => handleDelete(record.id)}>
            X
          </Button>
        </div>
      )
    },
  ];

  // ================================
  //            MERGED COLUMS ⭐
  // ================================
  const mergedColumns: TableProps<DataType>['columns'] = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        inputType: col.dataIndex === 'stt' || col.dataIndex === 'id' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });


  // ====================================================
  //                EXPORT EXCEL FILE
  // ====================================================
  // Hàm kiểm tra kiểu
  const isColumnType = (
    column: ColumnType<DataType> | any
  ): column is ColumnType<DataType> => {
    return !!column.dataIndex;
  };

  // Tạo kiểu cột cho Excel
  const excelColumns: IExcelColumn[] = columns
    .filter(isColumnType) // Lọc các cột chỉ có dataIndex
    .map((col) => ({
      title: col.title as string,
      dataIndex: col.dataIndex as string,
    }));

  return (
    <>
      <Space className='pb-4'>
      <Space>
          <Button size="large" type="primary" onClick={showModal}>
            Thêm kỹ năng
          </Button>

          {/* MODAL ⭐ */}
          <Modal
            title="Thêm kỹ năng"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={800}
          >
            {/* FORM ⭐ */}
            <Form
              form={formCreate}
              name="basic"
              scrollToFirstError
              style={{ paddingBlock: 32 }}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<jobTypeApi>
                label="Tên loại công việc "
                name="name"
                rules={[
                  { required: true, message: "Vui lòng không bỏ trống !" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<jobTypeApi>
                label="Mô tả kỹ năng"
                name="description"
                rules={[
                  { required: true, message: "Vui lòng không bỏ trống !" },
                ]}
              >
                <Input.TextArea rows={6} />
              </Form.Item>

              <Form.Item<jobTypeApi>
                label="Giá thấp nhất"
                name="minPrice"
                rules={[
                  { required: true, message: "Vui lòng không bỏ trống !" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<jobTypeApi>
                label="Giá cao nhất"
                name="maxPrice"
                rules={[
                  { required: true, message: "Vui lòng không bỏ trống !" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 5 }}>
                <Flex gap="small">
                  <Button type="primary" htmlType="submit">
                    Thêm
                  </Button>
                  <Button danger onClick={() => formCreate.resetFields()}>
                    Reset
                  </Button>
                </Flex>
              </Form.Item>
            </Form>
          </Modal>
        </Space>


        <Button
          size="large"
          onClick={() => {
            const excel = new Excel();
            excel
              .addSheet("DanhSachLoaiCongViec")
              .addColumns(excelColumns)           // Sử dụng excelColumns thay vì columns của Table
              .addDataSource(data || [])          // Sử dụng [] nếu data là undefined
              .saveAs("DanhSachLoaiCongViec.xlsx");
          }}
        >
          Export File Excel
        </Button>
      </Space>
      <Form form={form} component={false}>
        <Table<DataType>
          components={{
            body: { cell: EditableCell },
          }}
          bordered
          size='small'
          dataSource={data}
          columns={mergedColumns}
          rowKey="id"
          scroll={{ x: 'max-content', y: 370 }}
          pagination={{ onChange: cancel }}
        />
      </Form>
    </>
  );
};

export default TypeJob;
