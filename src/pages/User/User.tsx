import React, { useEffect, useState } from 'react';
import type { TableColumnsType } from 'antd';
import { Button, Space, Input, Table, Select } from 'antd';
import { getDistrict, getProvince } from '../../Hooks/useAddress/useAddress';

import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/configStore';
import { allProfileUserAsyncAction, deleteProfileAsyncAction, userProfileApi } from '../../redux/reducers/userReducer';
import { createStyles } from 'antd-style';
import { PiSealWarningFill } from 'react-icons/pi';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import imgFace from "../../assets/images/face.jpg";
import { UserOutlined } from '@ant-design/icons';

import { ColumnType } from 'antd/es/table';
import { Excel } from "antd-table-saveas-excel";


// Định nghĩa kiểu cột cho Excel
interface IExcelColumn {
  title: string;
  dataIndex: string;
  key?: string;
}

const { Search } = Input;

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



const User: React.FC = () => {
  const { allUserProfile } = useSelector((state: RootState) => state.userReducer);
  const dispatch: DispatchType = useDispatch();


  const { styles } = useStyle();

  const [searchValue, setSearchValue] = useState("");
  const [role, setRole] = useState<number>(1);                          // State cho `role`, giá trị mặc định là 1

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleChangeSelect = (value: number) => {
    setRole(value);                                                     // Cập nhật role khi thay đổi trong select
  };

  // ==== CALL API ⭐====
  const getDataListingUser = async (
    keyword: string,
    role: number, // 1: mặc định get all Role
    page: number,
    size: number,
    sort: string,
    direction: string,
    isDeleted: boolean,
  ): Promise<void> => {
    const actionApi = allProfileUserAsyncAction({ keyword, role, page, size, sort, direction, isDeleted });
    await dispatch(actionApi);
  };

  useEffect(() => {
    getDataListingUser('', role, 0, 100, 'id', 'DESC', false);
  }, []);

  // Call API mỗi khi searchValue thay đổi
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getDataListingUser(searchValue, role, 0, 100, 'id', 'DESC', false); // Truyền searchValue vào keyword
    }, 300);                                                           // Delay để tránh call API liên tục khi người dùng gõ

    return () => clearTimeout(timeoutId);                              // Xóa timeout khi searchValue thay đổi trước khi gọi API mới
  }, [searchValue, role]);

  // ==== CALL API ⭐====
  const handleDelete = async (id: number) => {
    await dispatch(deleteProfileAsyncAction(id));
    // Gọi lại API để cập nhật danh sách người dùng sau khi xóa thành công
    await getDataListingUser(searchValue, role, 0, 100, 'id', 'DESC', false);
  };

  // Tạo stt tự động tăng thêm vào object, bắt đầu từ 1
  const data: userProfileApi[] | undefined = allUserProfile?.content?.map((item, index) => ({
    ...item,
    stt: index + 1,
  }));

  const columns: TableColumnsType<userProfileApi> = [
    {
      title: 'Stt',
      dataIndex: 'stt',
      key: 'stt',
      width: 40,
      fixed: 'left',
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: 40,
      fixed: 'left',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'avatar',

      key: 'avatar',
      width: 100,
      fixed: 'left',
      render: (text) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {text ? <img src={text} width={50} alt="..." /> : <img src={imgFace} width={50} alt="..." />}
        </div>
      ),
    },
    {
      title: 'Họ và tên',
      dataIndex: 'fullname',
      key: 'fullname',
      width: 150,
      fixed: 'left',
      render: (text) => {
        return text
          .toLowerCase()
          .split(' ')
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 200,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
      width: 120,
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'dob',
      key: 'dob',
      width: 120,
    },
    {
      title: 'Xác thực',
      dataIndex: 'isVerified',
      key: 'isVerified',
      width: 100,
      render: (item?: boolean) => (
        <div className='flex justify-center'>
          {item ? (
            <BiSolidBadgeCheck className='text-[#57c81f] text-[24px]' />
          ) : (
            <PiSealWarningFill className='text-[#faad15] text-[24px]' />
          )}
        </div>
      )
    },
    {
      title: 'Số công việc',
      dataIndex: 'numOfJob',
      key: 'numOfJob',
      width: 100,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      width: 150,
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
      title: 'Xóa người dùng',
      dataIndex: 'delete',
      key: 'delete',
      width: 120,
      fixed: 'right',
      render: (_: any, record: userProfileApi) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" danger onClick={() => handleDelete(record.id)}>
            X
          </Button>
        </div>
      )
    },
  ];


  // ====================================================
  //                EXPORT EXCEL FILE
  // ====================================================
  // Hàm kiểm tra kiểu
  const isColumnType = (
    column: ColumnType<userProfileApi> | any
  ): column is ColumnType<userProfileApi> => {
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
            placeholder="Tìm theo tên và email"
            allowClear
            enterButton
            size="large"
            value={searchValue}
            onChange={handleChangeInput}
          />
          <Select
            defaultValue={1}
            style={{ width: 120 }}
            size="large"
            onChange={handleChangeSelect}
            options={[
              { value: 1, label: 'Tất cả' },
              { value: 2, label: 'Employer' },
              { value: 3, label: 'Applier' }
            ]}
          />
          <Button
            size="large"
            onClick={() => {
              const excel = new Excel();
              excel
                .addSheet("DanhSachNguoiDung")
                .addColumns(excelColumns)           // Sử dụng excelColumns thay vì columns của Table
                .addDataSource(data || [])          // Sử dụng [] nếu data là undefined
                .saveAs("DanhSachNguoiDung.xlsx");
            }}
          >
            Export File Excel
          </Button>
        </Space>
        <div className='flex items-center text-2xl font-medium'>
          <img className='me-2' src="https://emoji.slack-edge.com/T0172CCPGUW/party-blob/d7253707fa13e9ee.gif" width="30" />
          <h1 className='text-2xl me-1'>{allUserProfile?.totalElements}</h1>
          <UserOutlined />
        </div>
      </Space>
      <Table<userProfileApi>
        size='small'
        className={`${styles.customTable} p-2`}
        columns={columns}
        dataSource={data}
        rowKey="id"
        bordered
        scroll={{ x: 'max-content', y: 370 }}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
};

export default User;