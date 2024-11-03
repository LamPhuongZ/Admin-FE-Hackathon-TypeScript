import React, { useEffect, useState } from 'react';
import type { TableColumnsType } from 'antd';
import { Button, Space, Input, Table, Select, DatePicker } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/configStore';
import { createStyles } from 'antd-style';
import { PiSealWarningFill } from 'react-icons/pi';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import { UserOutlined } from '@ant-design/icons';

import { ColumnType } from 'antd/es/table';
import { Excel } from "antd-table-saveas-excel";
import { allListJobAsyncAction, jobApi } from '../../redux/reducers/jobReducer';
import moment from 'moment';
import { getDistrict, getProvince } from '../../Hooks/useAddress/useAddress';
import { RiCloseCircleFill } from 'react-icons/ri';
import { RangePickerProps } from 'antd/es/date-picker';


// Định nghĩa kiểu cột cho Excel
interface IExcelColumn {
  title: string;
  dataIndex: string;
  key?: string;
}

const { Search } = Input;
const { RangePicker } = DatePicker;


const useStyle = createStyles(({ css }) => ({
  customTable: css`
    .ant-table-container {
      .ant-table-body,
      .ant-table-content {
        scrollbar-width: thin;
        scrollbar-color: #eaeaea transparent;
        scrollbar-gutter: stable;
      }
    }
  `,
}));



const Job: React.FC = () => {
  const { allListJob } = useSelector((state: RootState) => state.jobRedcucer);
  const dispatch: DispatchType = useDispatch();


  const { styles } = useStyle();

  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [approvalStatus, setApprovalStatus] = useState<string>("ALL");                 // State cho `approvalStatus`, giá trị mặc định là 1

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleChangeSelect = (value: string) => {
    setApprovalStatus(value);                                                     // Cập nhật approvalStatus khi thay đổi trong select
  };

  const onChangeDate: RangePickerProps['onChange'] = (_date, dateString) => {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
    console.log(dateString);
  };

  // ==== CALL API ⭐====
  const getListingJob = async (
    page: number,
    size: number,
    sortBy: string,
    direction: string,
    title?: string,
    districtId?: number,
    provinceId?: number,
    startDate?: string,
    endDate?: string,
    jobTypeId?: number,
    approval?: string,
  ): Promise<void> => {
    const actionApi = allListJobAsyncAction({
      page,
      size,
      sortBy,
      direction,
      title,
      districtId,
      provinceId,
      startDate,
      endDate,
      jobTypeId,
      approval,
    });
    await dispatch(actionApi);
  };

  // ==== CALL API ⭐====
  useEffect(() => {
    // Gọi API với các tham số mặc định hoặc giá trị từ `searchValue`
    getListingJob(0, 100, 'id', 'desc', searchValue, undefined, undefined, startDate, endDate, undefined, approvalStatus);
  }, [searchValue]); // Thêm `searchValue` vào mảng phụ thuộc nếu cần tự động gọi lại API khi `searchValue` thay đổi


  // Call API mỗi khi searchValue thay đổi
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getListingJob(0, 100, 'id', 'desc', searchValue, undefined, undefined, startDate, endDate, undefined, approvalStatus); // Truyền searchValue vào keyword
    }, 300);                                                           // Delay để tránh call API liên tục khi người dùng gõ

    return () => clearTimeout(timeoutId);                              // Xóa timeout khi searchValue thay đổi trước khi gọi API mới
  }, [searchValue, startDate, endDate, approvalStatus]);


  // const handleDelete = async (id: number) => {
  //   await dispatch(deleteProfileAsyncAction(id));
  //   // Gọi lại API để cập nhật danh sách người dùng sau khi xóa thành công
  //   await getListingJob(0, 100, 'id', 'desc', searchValue, undefined, undefined, startDate, endDate, undefined, approvalStatus);
  // };





  // Tạo stt tự động tăng thêm vào object, bắt đầu từ 1
  const data: jobApi[] | undefined = allListJob?.content?.map((item, index) => ({
    ...item,
    stt: index + 1,
  }));

  const columns: TableColumnsType<jobApi> = [
    {
      title: 'Stt',
      dataIndex: 'stt',
      key: 'stt',
      width: 40,
      fixed: 'left',
    },
    {
      title: 'JobId',
      dataIndex: 'jobId',
      key: 'jobId',
      width: 60,
      fixed: 'left',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      width: 200,
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      width: 250,
    },
    // {
    //   title: <div style={{ textAlign: 'center' }}>Hình ảnh</div>,
    //   dataIndex: 'images',
    //   key: 'images',
    //   width: 300,
    //   render: (images: Image[]) => (
    //     <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
    //       {images && images.length > 0 ? (
    //         images.slice(0, 4).map((image, index) => (
    //           <img key={index} src={image.url} width={50} alt="Job Image" />
    //         ))
    //       ) : (
    //         <img src={imgFace} width={50} alt="Default Image" />
    //       )}
    //     </div>
    //   ),
    // },    
    {
      title: 'Thời gian',
      dataIndex: 'duration',
      key: 'duration',
      width: 100,
      render: (text) => (
        <div>
          {text} <span> - tiếng</span>
        </div>
      )
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
      width: 120,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      width: 250,
    },
    {
      title: 'Quận huyện',
      dataIndex: 'districtId',
      key: 'districtId',
      width: 140,
      render: (districtId: string | number) => {
        const district = getDistrict(districtId);
        return district?.name || "chưa xác định";
      }
    },
    {
      title: 'Tỉnh thành',
      dataIndex: 'provinceId',
      key: 'provinceId',
      width: 180,
      render: (provinceId: string | number) => {
        const province = getProvince(provinceId);
        return province?.name || "chưa xác định";
      }
    },
    {
      title: 'Người liên hệ',
      dataIndex: 'contactPerson',
      key: 'contactPerson',
      width: 150,
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'startDate',
      key: 'startDate',
      width: 120,
      render: (date: string) => moment(date).format('DD-MM-YYYY HH:mm:ss'),
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'endDate',
      key: 'endDate',
      width: 120,
      render: (date: string) => moment(date).format('DD-MM-YYYY HH:mm:ss'),
    },
    {
      title: 'Ngày đăng',
      dataIndex: 'postedDate',
      key: 'postedDate',
      width: 120,
      render: (date: string) => moment(date).format('DD-MM-YYYY HH:mm:ss'),
    },
    // {
    //   title: 'Loại công việc',
    //   dataIndex: 'jobType',
    //   key: 'jobType',
    //   width: 140,
    // },
    // {
    //   title: 'Kỹ năng',
    //   dataIndex: 'jobSkills',
    //   key: 'jobSkills',
    //   width: 140,
    // },
    {
      title: 'Trạng thái xác thực',
      dataIndex: 'jobApprovalStatus',
      key: 'jobApprovalStatus',
      width: 100,
      fixed: 'right',
      render: (item?: string) => (
        <div className='flex justify-center'>
          {(() => {
            switch (item) {
              case "PENDING":
                return <PiSealWarningFill className='text-[#faad15] text-[24px]' />;
              case "APPROVED":
                return <BiSolidBadgeCheck className='text-[#57c81f] text-[24px]' />;
              case "REJECTED":
                return <RiCloseCircleFill className='text-red-500 text-[24px]' />;
              default:
                return null;
            }
          })()}
        </div>
      ),
    }
    // {
    //   title: 'Hành động',
    //   dataIndex: 'delete',
    //   key: 'delete',
    //   width: 100,
    //   fixed: 'right',
    //   render: (_: any, record: jobApi) => (
    //     <div style={{ display: 'flex', justifyContent: 'center' }}>
    //       <Button type="primary" danger onClick={() => handleDelete(record.jobId)}>
    //         X
    //       </Button>
    //     </div>
    //   )
    // },
  ];


  // ====================================================
  //                EXPORT EXCEL FILE
  // ====================================================
  // Hàm kiểm tra kiểu
  const isColumnType = (
    column: ColumnType<jobApi> | any
  ): column is ColumnType<jobApi> => {
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
      <Space className='flex justify-between items-center mx-2 p-2'>
        <Space>
          <Search
            placeholder="Tìm theo tiêu đề"
            allowClear
            enterButton
            size="large"
            value={searchValue}
            onChange={handleChangeInput}
          />

          <Space direction="vertical" size={12}>
            <RangePicker size='large' onChange={onChangeDate} />
          </Space>

          <Select
            defaultValue="ALL"
            style={{ width: 120 }}
            size="large"
            onChange={handleChangeSelect}
            options={[
              { value: 'ALL', label: 'Tất cả' },
              { value: 'PENDING', label: 'Đang chờ' },
              { value: 'APPROVED', label: 'Chấp nhận' },
              { value: 'REJECTED', label: 'Từ chối' }
            ]}
          />
          <Button
            size="large"
            onClick={() => {
              const excel = new Excel();
              excel
                .addSheet("DanhSachCongViec")
                .addColumns(excelColumns)           // Sử dụng excelColumns thay vì columns của Table
                .addDataSource(data || [])          // Sử dụng [] nếu data là undefined
                .saveAs("DanhSachCongViec.xlsx");
            }}
          >
            Export File Excel
          </Button>
        </Space>
        <div className='flex items-center text-2xl font-medium'>
          <img className='me-2' src="https://emoji.slack-edge.com/T0172CCPGUW/party-blob/d7253707fa13e9ee.gif" width="30" />
          <h1 className='text-2xl me-1'>{allListJob?.totalElements}</h1>
          <UserOutlined />
        </div>
      </Space>
      <Table<jobApi>
        size='small'
        className={`${styles.customTable} p-2`}
        columns={columns}
        dataSource={data}
        rowKey="jobId"
        bordered
        scroll={{ x: 'max-content', y: 370 }}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
};

export default Job;