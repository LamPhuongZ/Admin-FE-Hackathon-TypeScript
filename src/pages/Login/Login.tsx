import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import logo from "../../assets/images/logo-company.png";

import { useFormik } from "formik";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { useNavigate } from "react-router-dom";

import { loginAsyncAction } from "../../redux/reducers/authReducer";
import { toast } from "react-toastify";
import { toastOptions } from "../../Utils/toastOptions";


export interface UserLoginFrm {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { token } = useSelector((state: RootState) => state.authReducer);

  const [active, setActive] = useState<boolean>(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const dispatch: DispatchType = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(token){
      navigate('/');
    }
  },[token])


  const loginFrm = useFormik<UserLoginFrm>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup
        .string()
        .required("Email không được bỏ trống!")
        .email("Email không hợp lệ!"),
      password: yup
        .string()
        .required("Password không được bỏ trống!")
        .min(8, "Password phải từ 8 đến 16 ký tự.")
        .max(16, "Password phải từ 8 đến 16 ký tự.")
        .matches(/\d/, "Password phải chứa ít nhất một chữ số.")
        .matches(/[a-z]/, "Password phải chứa ít nhất một chữ cái thường.")
        .matches(/[A-Z]/, "Password phải chứa ít nhất một chữ cái viết hoa.")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password phải chứa ít nhất một ký tự đặc biệt."),
    }),
    onSubmit: (values: UserLoginFrm) => {
      const actionApi = loginAsyncAction(values);
      dispatch(actionApi);
    },
  });


  return (
    <div className={`flex justify-center items-center min-h-screen w-full`}>
      <div
        className={`relative w-3/5 h-[650px] shadow-[rgba(0,0,0,0.25)_0px_14px_28px,rgba(0,0,0,0.22)_0px_10px_10px] rounded-[10px] overflow-hidden flex ${active ? "transform transition-all duration-[1s]" : ""
          }`}
      >
        {/* Sign In/Up Forms */}
        <div
          className={`relative w-1/2 flex h-full transition-transform duration-[800ms] ${active ? "translate-x-full" : "transform-none"
            } bg-white z-[1] overflow-hidden`}
        >
          {/* Sign In Form */}
          <div
            className={`absolute w-full h-full flex flex-col items-center justify-center text-center transition-opacity duration-[1150ms] ${active ? "opacity-0 z-[1]" : "opacity-100 z-[5]"
              } bg-white`}
          >
            <img src={logo} alt="img-logo" className="mb-4" />
            <h3 className="text-[40px] text-gray-800 font-bold leading-none">
              Sign In
            </h3>
            <span className="text-gray-600">or use your account</span>

            <form id="form_input_login" onSubmit={loginFrm.handleSubmit}>
              <div className="my-[30px] w-[330px] h-[48px] bg-[#EEEDEF]">
                <input
                  id="username"
                  type="email"
                  placeholder="Email"
                  className="w-full h-full px-2 text-base border-none bg-transparent outline-none placeholder:text-[#A9A8A9]"
                  onInput={loginFrm.handleChange} 
                  onBlur={loginFrm.handleBlur}
                  />
                  {loginFrm.errors.username && <p className="text-left text-rose-500 text-sm px-2">{loginFrm.errors.username}</p>}
              </div>

              <div className="my-[30px] w-[330px] h-[48px] bg-[#EEEDEF]">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full h-full px-2 text-base border-none bg-transparent outline-none placeholder:text-[#A9A8A9]"
                  onInput={loginFrm.handleChange} 
                  onBlur={loginFrm.handleBlur}
                />
                {loginFrm.errors.password && <p className="text-left text-rose-500 text-sm px-2">{loginFrm.errors.password}</p>}
              </div>

              <div className="text-base mb-5 font-medium">
                <span className="text-gray-600 cursor-pointer hover:text-[#3e8fff]">
                  Forgot your password?
                </span>
              </div>
              <button
                type="submit"
                className="hover:text-black hover:drop-shadow-2xl inline-block bg-[#3e8fff] outline-none text-white uppercase text-[15px] font-extrabold py-[12px] px-[45px] rounded-[22px] border border-white cursor-pointer"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Sign Up Form */}
          <div
            className={`absolute w-full h-full flex flex-col items-center justify-center text-center transition-opacity duration-[1150ms] ${active ? "opacity-100 z-[5]" : "opacity-0 z-[1]"
              } bg-white`}
          >
            <img src={logo} alt="img-logo" className="mb-4" />
            <h3 className="text-[40px] text-gray-800 font-bold leading-none">
              Sign Up
            </h3>
            <span className="text-gray-600">
              or use your email for registration
            </span>

            <form id="form_input_register">
              <div className="my-[30px] w-[330px] h-[48px] bg-[#EEEDEF]">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full h-full px-2 text-base border-none bg-transparent outline-none placeholder:text-[#A9A8A9]"
                />
              </div>

              <div className="my-[30px] w-[330px] h-[48px] bg-[#EEEDEF]">
                <input
                  id="email_register"
                  type="email"
                  placeholder="Email"
                  className="w-full h-full px-2 text-base border-none bg-transparent outline-none placeholder:text-[#A9A8A9]"
                />
              </div>

              <div className="my-[30px] w-[330px] h-[48px] bg-[#EEEDEF]">
                <input
                  id="password_register"
                  type="password"
                  placeholder="Password"
                  className="w-full h-full px-2 text-base border-none bg-transparent outline-none placeholder:text-[#A9A8A9]"
                />
              </div>

              <button
                type="button"
                className="hover:text-black hover:drop-shadow-2xl inline-block outline-none bg-[#3e8fff] text-white uppercase text-[15px] font-extrabold py-[12px] px-[45px] rounded-[22px] border border-white cursor-pointer"
                onClick={()=> { toast.error('Đăng ký thất bại!', toastOptions);}}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`w-1/2 h-full bg-[#3e8fff] flex items-center justify-center text-center transition-transform duration-[800ms] ${active ? "-translate-x-full" : "translate-x-0"
            } overflow-hidden z-[5]`}
        >
          {/* Sign In Side */}
          <div
            className={`absolute flex flex-col items-center justify-center text-center gap-5 h-full w-[450px] transition-opacity duration-[500ms] ${active
              ? "opacity-0 -translate-x-full"
              : "opacity-100 translate-x-0"
              }`}
          >
            <h3 className="text-[40px] mb-[15px] font-bold leading-none text-white">
              Welcome Back!
            </h3>
            <p className="text-[17px] leading-none text-white font-semibold mb-5">
              To keep with us please login with your personal info
            </p>
            <button
              onClick={toggleActive}
              className="inline-flex items-center text-white uppercase text-[15px] font-extrabold bg-transparent py-[12px] px-[45px] border border-white rounded-[22px] cursor-pointer"
            >
              Sign Up <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* Sign Up Side */}
          <div
            className={`absolute flex flex-col items-center justify-center text-center gap-5 h-full w-full transition-all duration-[500ms] ${active
              ? " opacity-100 translate-x-0"
              : "translate-x-full opacity-100"
              }`}
          >
            <h3 className="text-[40px] mb-[15px] font-bold leading-none text-white">
              Hello Friend!
            </h3>
            <p className="text-[17px] leading-none text-white font-semibold mb-5">
              Enter your personal details and start easy job with us
            </p>
            <button
              onClick={toggleActive}
              className="inline-flex items-center text-white uppercase text-[15px] font-extrabold bg-transparent py-[12px] px-[45px] border border-white rounded-[22px] cursor-pointer"
            >
              <FaArrowLeft className="mr-2" /> Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
