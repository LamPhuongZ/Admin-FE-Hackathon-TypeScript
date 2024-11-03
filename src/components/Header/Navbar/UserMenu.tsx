import { useEffect } from 'react'
import { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../../redux/configStore'
import { useNavigate } from 'react-router-dom';
import { profileUserAsyncAction } from '../../../redux/reducers/userReducer'
import { clearStorage } from '../../../Utils/utilMethod'
import { ACCESS_TOKEN, USER_LOGIN } from '../../../Utils/config'

import { PiSignOut } from "react-icons/pi";
import { UserOutlined } from '@ant-design/icons';
import img from "../../../assets/images/face.jpg";
import Avartar from '../../Avartar/Avartar'
import MenuItem from './MenuItem'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode';
import { UserLogin } from '../../../redux/reducers/authReducer';


export default function UserMenu() {
  const { token } = useSelector((state: RootState) => state.authReducer)
  const { userProfile } = useSelector((state: RootState) => state.userReducer)

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();


  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [setIsOpen])


  const handleProfiles = useCallback(() => {
    setIsOpen(false);
    navigate('/profile');
  }, [setIsOpen, navigate]);


  // CALL API ⭐
  const getUserProfile = useCallback(() => {
    if (token) {
      const action = profileUserAsyncAction()
      dispatch(action)
    }
  }, [token, dispatch])

  // Sử dụng useEffect để gọi hàm lấy thông tin userProfile khi token thay đổi
  useEffect(() => {
    getUserProfile()
  }, [getUserProfile])

  console.log(userProfile)


  const renderAvatar = () => {
    // Kiểm tra userProfile có tồn tại và không phải là một mảng rỗng\
    if (!userProfile || !userProfile.avatar) {
      return <Avartar />;
    }
  
    return (
      <img
        className="rounded-full h-[43px] w-[43px] cursor-pointer"
        src={userProfile.avatar}
        height={43}
        width={43}
        alt="Avatar"
        onError={(e) => {
          // Replace broken image with default avatar if there's an error loading it
          (e.target as HTMLImageElement).src = img;
        }}
      />
    );
  }


  const renderMenuItem = () => {
    // Lấy email trực tiếp sau khi giải mã token, mặc định là chuỗi rỗng nếu không có token
    const userEmail = token ? jwtDecode<UserLogin>(token?.['access-token'])['sub'] || '' : '';

    return (
      <>
        <div className="px-4 py-4">
          <p className="font-bold">{(userProfile?.fullname || '').toUpperCase()}</p>
          <p className="text-gray-500 text-sm">{userEmail}</p>
        </div>
        <hr />
        <MenuItem onClick={handleProfiles} 
                  label={<><UserOutlined style={{marginRight: '8px'}} /> Thông tin tài khoản</>} />
        <MenuItem onClick={() => {
          // kiểm tra xem giá trị trả về từ clearStorage(USER_LOGIN) có tồn tại hay không
          clearStorage(ACCESS_TOKEN);
          clearStorage(USER_LOGIN);
          toast.success('Đăng xuất thành công!', {
            position: "top-center",
            autoClose: 300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            window.scrollTo(0, 0); // Cuộn về đầu trang khi component được render
            window.location.reload(); //f5
          }, 700);
          setIsOpen(false);
        }}
          label={
            <>
              <PiSignOut style={{ display: 'inline', marginRight: '8px'}} />
              Đăng xuất
            </>} />
      </>
    );
  }



  return (
    <div className="me-10">
      <div className='relative' onClick={toggleOpen}>
        {renderAvatar()}
        <span className='absolute bg-[#15B79F] w-3 h-3 rounded-full right-0 bottom-0 border-white border-2'></span>
      </div>

      {isOpen && (
        <div
          className={`
            absolute 
            rounded-xl 
            shadow-md 
            me-8 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm 
            mt-2 
            border-[1px] 
            border-solid 
            border-light-gray
            z-50`}>
          <div
            className={`
                flex 
                flex-col 
                cursor-pointer`}>
            {renderMenuItem()}
          </div>
        </div>
      )}
    </div>
  )
}