import React, { useEffect, useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Form, Input, InputNumber, Popconfirm, Space, Table, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/configStore';
import { deleteSkillAsyncAction, getAllSkillAsyncAction, skillApi, updateSkillAsyncAction } from '../../redux/reducers/skillReducer';
import { FaEdit } from 'react-icons/fa';
import { Excel } from 'antd-table-saveas-excel';
import { ColumnType } from 'antd/es/table';

// Định nghĩa kiểu cột cho Excel
interface IExcelColumn {
  title: string;
  dataIndex: string;
  key?: string;
}

interface DataType {
  stt?: number;
  id: number;
  skill: string;
  description: string;
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


const App: React.FC = () => {
  const { allSkill } = useSelector((state: RootState) => state.skillReducer) as { allSkill: DataType[] };
  const dispatch: DispatchType = useDispatch();

  // ==== CALL API ⭐====
  const getDataListSkill = async (): Promise<void> => {
    const actionApi = getAllSkillAsyncAction();
    await dispatch(actionApi);
  };

  useEffect(() => {
    getDataListSkill();
  }, []);

  // Tạo stt và đảo ngược dữ liệu khi allSkill thay đổi
  useEffect(() => {
    if (allSkill && allSkill.length > 0) {
      const newData = allSkill
        .slice() // Tạo bản sao của allSkill để không thay đổi dữ liệu gốc
        .reverse() // Đảo ngược thứ tự của dữ liệu
        .map((item, index) => ({
          ...item,
          stt: index + 1,
        }));
      setData(newData);
    }
  }, [allSkill]);



  // ==== CALL API DELETE ⭐====
  const handleDelete = async (id: number) => {
    await dispatch(deleteSkillAsyncAction(id));
    // Gọi lại API để cập nhật danh sách người dùng sau khi xóa thành công
    await getDataListSkill();
  };

    // ==== CALL API UPDATE ⭐====
    const handleUpdate = async (rowFromData: skillApi) => {
      await dispatch(updateSkillAsyncAction(rowFromData));
      // Gọi lại API để cập nhật danh sách người dùng sau khi xóa thành công
      await getDataListSkill();
    };


  const [form] = Form.useForm();
  const [data, setData] = useState<DataType[]>([]);
  const [editingKey, setEditingKey] = useState<number | string>('');

  const isEditing = (record: DataType) => record.id === editingKey;

  const edit = (record: Partial<DataType> & { id: React.Key }) => {
    form.setFieldsValue({ stt: '', skill: '', description: '', ...record });
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
      console.log("🚀 ~ file: Skill.tsx:135 ~ save ~ row:", row);
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
      title: 'Kỹ năng',
      dataIndex: 'skill',
      key: 'skill',
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
      title: 'Chỉnh sửa',
      width: 130,
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
        <Button
          size="large"
          onClick={() => {
            const excel = new Excel();
            excel
              .addSheet("DanhSachKynang")
              .addColumns(excelColumns)           // Sử dụng excelColumns thay vì columns của Table
              .addDataSource(data || [])          // Sử dụng [] nếu data là undefined
              .saveAs("DanhSachKynang.xlsx");
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

export default App;
