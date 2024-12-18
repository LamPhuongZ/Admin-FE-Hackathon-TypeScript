import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { toastOptions } from "../../Utils/toastOptions";
import { httpClient, USER_LOGIN } from "../../Utils/config";
import { getDataJsonStorage, setDataJsonStorage } from "../../Utils/utilMethod";


export interface listUserProfileApi {
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  content: userProfileApi[];
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface userProfileApi {
  id: number;
  email: string;
  phone: number;
  fullname: string;
  age: number;
  dob: Date;
  avatar: string;
  isVerified: boolean;
  numOfJob: number;
  star: number;
  createdDate: Date;
  address: string;
  provinceId: number;
  districtId: number;
  jobSkills: any[];
  imgFrontOfCard: string;
  imgBackOfCard: string;
}

export interface userProfileState {
  isLoadingProfile: boolean;
  closeInput: boolean;
  userProfile: userProfileApi | null;
  allUserProfile: listUserProfileApi | null;
}

const initialState: userProfileState = {
  isLoadingProfile: false,
  closeInput: false,
  userProfile: getDataJsonStorage("UserProfile"),
  allUserProfile: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteProfileAsyncAction.pending, (state) => {
        state.isLoadingProfile = true;
      })
      .addCase(deleteProfileAsyncAction.fulfilled, (state) => {
        state.isLoadingProfile = false;
      })
      .addCase(deleteProfileAsyncAction.rejected, (state) => {
        state.isLoadingProfile = false;
      })

      .addCase(profileUserAsyncAction.pending, (state) => {
        state.isLoadingProfile = true;
      })
      .addCase(profileUserAsyncAction.fulfilled, (state, action) => {
        state.isLoadingProfile = false;
        state.userProfile = action.payload;
      })
      .addCase(profileUserAsyncAction.rejected, (state) => {
        state.isLoadingProfile = false;
      })

      .addCase(changeProfileAsyncAction.pending, (state) => {
        state.closeInput = false;
      })
      .addCase(changeProfileAsyncAction.fulfilled, (state, action) => {
        state.closeInput = true;
        state.userProfile = action.payload;
      })
      .addCase(changeProfileAsyncAction.rejected, (state) => {
        state.closeInput = false;
      })

      .addCase(allProfileUserAsyncAction.pending, (state) => {
        state.isLoadingProfile = true;
      })
      .addCase(allProfileUserAsyncAction.fulfilled, (state, action) => {
        state.isLoadingProfile = false;
        state.allUserProfile = action.payload;
      })
      .addCase(allProfileUserAsyncAction.rejected, (state) => {
        state.isLoadingProfile = false;
      });
  },
});

export const { } = userReducer.actions;

export default userReducer.reducer;

// =================Async Action===================
export const profileUserAsyncAction = createAsyncThunk(
  "profileUserAsyncAction",
  async () => {
    try {
      const res = await httpClient.get(`/api/v1/self`);

      setDataJsonStorage(USER_LOGIN, res.data.data);
      return res.data.data;
    } catch (err) {
      console.log(
        "🚀 ~ file: userReducer.ts:106 ~ profileUserAsyncAction ~ err:",
        err
      );
      throw err;
    }
  }
);

export const allProfileUserAsyncAction = createAsyncThunk(
  "allProfileUserAsyncAction",
  async ({
    keyword = "",
    role = 1, // 1: mặc định get all Role
    page = 0,
    size = 10,
    sort = "id",
    direction = "DESC",
    isDeleted = false,
  }: {
    keyword?: string;
    role?: number;
    page?: number;
    size?: number;
    sort?: string;
    direction?: string;
    isDeleted?: boolean;
  }) => {
    try {
      const res = await httpClient.get(
        `/api/v1/profile?keyword=${keyword}&role=${role}&page=${page}&size=${size}&sort=${sort}&direction=${direction}&isDeleted=${isDeleted}`
      );

      return res.data.data;
    } catch (err) {
      console.log("🚀 ~ file: userReducer.ts:113 ~ allProfileUserAsyncAction ~ err:", err);
      throw err;
    }
  }
);

export const changeProfileAsyncAction = createAsyncThunk("changeProfileAsyncAction", async (changeUserProfiles: userProfileApi) => {
  try {
    const res = await httpClient.patch(`/api/v1/self`, changeUserProfiles);

    toast.success('Cập nhật thành công!', toastOptions);
    return res.data.data;
  } catch (err) {
    toast.error('Cập nhật thất bại!', toastOptions);
    console.log("🚀 ~ file: userReducer.ts:81 ~ changeProfileAsyncAction ~ err:", err)
    throw (err)
  }
})

export const deleteProfileAsyncAction = createAsyncThunk("deleteProfileAsyncAction",
  async (id: number) => {
    try {
      await httpClient.post(`/api/v1/profile/toggleIsDeleted/${id}`);

      toast.success("Xóa thành công!", toastOptions);
    } catch (err) {
      toast.error("Xóa thất bại!", toastOptions);
      console.log("🚀 ~ file: userReducer.ts:156 ~ deleteProfileAsyncAction ~ err:", err);
      throw err;
    }
  }
);
