import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


import { toast } from 'react-toastify';
import { toastOptions } from '../../utils/toastOptions';
import { httpClient, USER_LOGIN } from '../../utils/config';
import { getDataJsonStorage, setDataJsonStorage } from '../../utils/utilMethod';


export interface userProfileApi {
  fullname:    string;
  age:         number;
  avatar:      string;
  isVerified:  boolean;
  numOfJob:    number;
  star:        null;
  createdDate: Date;
  address:     string;
  provinceId:  number;
  districtId:  number;
  jobSkills:   any[];
}

export interface userProfileState {
  isLoadingChangeProfile: boolean;
  userProfile: userProfileApi | undefined;
}

const initialState:userProfileState = {
  isLoadingChangeProfile: false,
  userProfile: getDataJsonStorage("UserProfile"),
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeProfileAsyncAction.pending, (state) => {
        state.isLoadingChangeProfile = true;
      })
      .addCase(changeProfileAsyncAction.fulfilled, (state) => {
        state.isLoadingChangeProfile = false;
      })
      .addCase(changeProfileAsyncAction.rejected, (state) => {
        state.isLoadingChangeProfile = false;
      })

      .addCase(profileUserAsyncAction.pending, (state) => {
        state.isLoadingChangeProfile = true;
      })
      .addCase(profileUserAsyncAction.fulfilled, (state, action) => {
        state.isLoadingChangeProfile = false;
        state.userProfile = action.payload;
      })
      .addCase(profileUserAsyncAction.rejected, (state) => {
        state.isLoadingChangeProfile = false;
      })
  },

});

export const { } = userReducer.actions

export default userReducer.reducer


// =================Async Action===================
export const profileUserAsyncAction = createAsyncThunk("profileUserAsyncAction", async () => {
  try {
    const res = await httpClient.get(`/api/v1/self`);
    console.log("🚀 ~ file: userReducer.ts:74 ~ profileUserAsyncAction ~ res:", res);

    
    setDataJsonStorage(USER_LOGIN, res.data.data);
    return res.data.data;
  } catch (err) {
    console.log("🚀 ~ file: userReducer.ts:106 ~ profileUserAsyncAction ~ err:", err)
    throw (err)
  }
})



export const changeProfileAsyncAction = createAsyncThunk("changeProfileAsyncAction", async (changeUserProfiles: userProfileApi) => {
  try {
    const res = await httpClient.put(`/api/v1/self`, changeUserProfiles);

    const userLoginData = getDataJsonStorage(USER_LOGIN);
    // Kiểm tra nếu có dữ liệu trong key "userLogin"
    if (userLoginData) {
      // Gán dữ liệu mới vào thuộc tính "user"
      userLoginData.user = res.data.content
      // Lưu dữ liệu mới vào key "userLogin"
      setDataJsonStorage(USER_LOGIN, userLoginData);
    }

    toast.success('Thay đổi thành công!', toastOptions);

  } catch (err) {
    toast.error('Thay đổi thất bại!', toastOptions);
    console.log("🚀 ~ file: userReducer.ts:81 ~ changeProfileAsyncAction ~ err:", err)
    // Đảm bảo lỗi được truyền đi
    throw (err)
  }
})



