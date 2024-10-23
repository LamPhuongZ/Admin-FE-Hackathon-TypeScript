import { useEffect } from 'react'
import { useState, useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avartar from '../../Avartar/Avartar'
import MenuItem from './MenuItem'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../../redux/configStore'

import { useNavigate } from 'react-router-dom';
import { profileUserAsyncAction } from '../../../redux/reducers/userReducer'

import { clearStorage } from '../../../utils/utilMethod'
import { ACCESS_TOKEN, USER_LOGIN } from '../../../utils/config'

type Props = {}

export default function UserMenu({ }: Props) {

  const { token } = useSelector((state: RootState) => state.authReducer)
  const { userProfile } = useSelector((state: RootState) => state.userReducer)
  const dispatch: DispatchType = useDispatch();

  const [isOpen, setIsOpen] = useState(false);


  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [setIsOpen])


  // Chuyển trang profile khi onclick sử dụng useNavigate
  const navigate = useNavigate();

  const handleProfiles = useCallback(() => {
    setIsOpen(false);
    navigate('/profile');
  }, [setIsOpen, navigate]);


  // Di chuyển hàm getUserProfile ra ngoài phạm vi của component
  const getUserProfile = useCallback(() => {
    if (token) { // Check if token and token.id are defined
      const action = profileUserAsyncAction()
      dispatch(action)
    }
  }, [token, dispatch])

  // Sử dụng useEffect để gọi hàm lấy thông tin userProfile khi token thay đổi
  useEffect(() => {
    getUserProfile()
  }, [getUserProfile, token])

  const renderAvatar = () => {
    // Kiểm tra userProfile có tồn tại và không phải là một mảng rỗng
    if (typeof userProfile !== "undefined") {
      return (
        <>
          <img 
            className='rounded-full h-[30px]' 
            src={userProfile?.avatar} 
            height={30} 
            width={30} 
            alt='Avatar'>
          </img>
        </>
      )
    } else {
      return (
        <>
          <Avartar />
        </>
      )
    }
  }


  const renderMenuItem = () => {
      return (
        <>
          <MenuItem onClick={handleProfiles} label='Thông tin tài khoản' />
          <hr />
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
            navigate('/');
            setIsOpen(false);
          }} label='Đăng xuất' />
        </>
      );
  }



  return (
    <div className=''>
      <div className="flex flex-row items-center gap-2">
        <div 
          className={`
            p-4 
            py-1 
            px-2 
            border-[1px] 
            border-neutral-200 
            flex 
            flex-row 
            items-center 
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition 
            bg-white 
            overflow-hidden`}
          onClick={toggleOpen}>
          <AiOutlineMenu style={{ fontSize: '20px' }} />
          {/* <div className="hidden md:block"> */}
          <div className="block">
            {renderAvatar()}
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className={`
            absolute 
            rounded-xl 
            shadow-md 
            w-[170px] 
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