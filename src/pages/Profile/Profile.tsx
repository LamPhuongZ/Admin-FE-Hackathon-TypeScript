import { Card,  Descriptions,  Typography,Avatar } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined, GlobalOutlined } from '@ant-design/icons';
import {  useSelector } from 'react-redux'
import {  RootState } from '../../redux/configStore'
import UpdateProfile from './UpdateProfile';
import { getProvince } from '../../Hooks/useAddress/useAddress';


const Profile = () => {
  
  const { userProfile } = useSelector((state: RootState) => state.userReducer)
  


const { Title } = Typography;
  return (
    <>
    <div className="container mx-auto py-8 px-4">
   {/* Thông tin chi tiết */}
   <Card title="Thông tin cá nhân">
   <div className='flex flex-col items-center gap-3'>
          <Avatar size={150} src={userProfile?.avatar} icon={<UserOutlined />} draggable='false'/>
          <Title level={3}>{userProfile?.fullname}</Title>
        </div>
        <Descriptions layout="vertical" column={{ xs: 1, sm: 2, md: 3 }}>
          <Descriptions.Item  label={<div className='!flex items-center gap-2'><UserOutlined /> Họ và tên</div>}>
            {userProfile?.fullname || 'Chưa cập nhật'}
          </Descriptions.Item>
          
          <Descriptions.Item  label={<div className='!flex items-center gap-2'><MailOutlined /> Email</div>}>
            {userProfile?.email || 'Chưa cập nhật'} 
          </Descriptions.Item>
          
          <Descriptions.Item label={<div className='!flex items-center gap-2'><PhoneOutlined /> Số điện thoại</div>}>
            {userProfile?.phone || 'Chưa cập nhật'}
          </Descriptions.Item>
          
          
          
          <Descriptions.Item label={<div className='!flex items-center gap-2'><HomeOutlined /> Địa chỉ</div>}>
            {userProfile?.address || 'Chưa cập nhật'}
          </Descriptions.Item>

          <Descriptions.Item label={<div className='!flex items-center gap-2'><GlobalOutlined />Thành phố</div>}>
            {userProfile?.provinceId ? getProvince(userProfile.provinceId.toString())?.name : 'Chưa cập nhật'}
          </Descriptions.Item>
          
          <Descriptions.Item label="Vai trò">
            {userProfile?.isVerified || 'Admin'}
          </Descriptions.Item>
        </Descriptions>

        <div className="mt-4 flex justify-end">
        
      <UpdateProfile />
        </div>
      </Card>
      
    </div>
      
    </>
    )
};

export default Profile;
