import React, { useEffect } from 'react';
import type { TableColumnsType } from 'antd';
import { Button, Table } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/configStore';
import { allProfileUserAsyncAction, deleteProfileAsyncAction, userProfileApi } from '../../redux/reducers/userReducer';
import { createStyles } from 'antd-style';


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
  const { allUserProfile } = useSelector((state: RootState) => state.userReducer)
  console.log("🚀 ~ file: User.tsx:27 ~ allUserProfile:", allUserProfile);
  const { styles } = useStyle();
  const dispatch: DispatchType = useDispatch();

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
    dispatch(actionApi);
  };

  useEffect(() => {
    getDataListingUser('', 1, 0, 100, 'id', 'DESC', false);
  }, []);


  const data: userProfileApi[] | undefined = allUserProfile?.content?.map((item, index) => ({
    ...item,
    stt: index + 1,  // Tạo stt tự động tăng thêm vào object, bắt đầu từ 1
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
          <img src={text} width={50} alt="..." />
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
      width: 100,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
      width: 150,
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'dob',
      key: 'dob',
      width: 150,
    },
    {
      title: 'Xác thực',
      dataIndex: 'isVerified',
      key: 'isVerified',
      width: 100,
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
      width: 100,
    },
    {
      title: 'Tỉnh thành',
      dataIndex: 'provinceId',
      key: 'provinceId',
      width: 100,
    },
    {
      title: 'Hành động',
      dataIndex: 'delete',
      key: 'delete',
      width: 100,
      fixed: 'right',
      render: (_: any, record: userProfileApi) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" danger onClick={() => {
            const action = deleteProfileAsyncAction(record.id);
            dispatch(action)
          }}>
            X
          </Button>
        </div>
      )
    },
  ];




  return (
    <Table<userProfileApi>
      size='small'
      className={`${styles.customTable} p-2`}
      columns={columns}
      dataSource={data}
      rowKey="id"
      bordered
      scroll={{ x: 'max-content', y: 370 }}
    />
  );
};

export default User;