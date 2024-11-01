import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, httpClient } from '../../Utils/config';
import { UserLoginFrm } from '../../pages/Login/Login';

import 'react-toastify/dist/ReactToastify.css';
import { setDataTextStorage } from '../../Utils/utilMethod';

import { toast } from 'react-toastify';
import { toastOptions } from '../../Utils/toastOptions';
import { jwtDecode } from 'jwt-decode';


export interface UserLogin {
  role: string;
  sub: string;
  iat: number;
  exp: number;
}

export interface UserLoginApi {
  "access-token": string;
}

export interface UserState {
  isLoadingAuth: boolean;
}

const initialState: UserState = {
  isLoadingAuth: false,
};




const authReducer = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {},
  /*
    Các trạng thái của 1 action api
    + pending: Khi api đang được thực hiện
    + fulfilled: khi kết quả api trả về thành công
    + rejected: Khi kết quả api trả về thất bại
 */
  extraReducers: (builder) => {
    builder
      .addCase(loginAsyncAction.pending, (state) => {
        state.isLoadingAuth = true;
      })
      .addCase(loginAsyncAction.fulfilled, (state) => {
        state.isLoadingAuth = false;
      })
      .addCase(loginAsyncAction.rejected, (state) => {
        state.isLoadingAuth = false;
      })
  },
})

export const { } = authReducer.actions

export default authReducer.reducer


// =================Async Action===================
export const loginAsyncAction = createAsyncThunk("loginAsyncAction", async (userLoginForm: UserLoginFrm) => {
  try {
    const res = await httpClient.post("/api/v1/auth/sign-in", userLoginForm);
    const token: UserLogin = jwtDecode(res.data.data['access-token']);
    
    if(token.role !== "ROLE_ADMIN"){
      toast.error('Đăng nhập thất bại! Not Permission !', toastOptions);
      return 
    }

    // ⭐Lưu vào trong LocalStorage
    setDataTextStorage(ACCESS_TOKEN, res.data.data['access-token']);
    toast.success('Đăng nhập thành công!', toastOptions);

    // Trả về một đối tượng có cấu trúc của UserLoginApi
    return { "access-token": res.data.data['access-token'] };

  } catch (err) {
    toast.error('Đăng nhập thất bại!', toastOptions);
    console.log("🚀 ~ file: authReducer.ts:86 ~ loginAsyncAction ~ err:", err)
    // Đảm bảo lỗi được truyền đi
    throw err;
  }
});

