import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { httpClient } from '../../Utils/config';
import { toast } from 'react-toastify';
import { toastOptions } from '../../Utils/toastOptions';

export interface jobTypeApi {
  id: number;
  name: string;
  description: string;
  minPrice: number;
  maxPrice: number
}

export interface jobTypeState {
  isLoadingJobType: boolean;
  allJobType: jobTypeApi[];
}

const initialState = {
  isLoadingJobType: false,
  allJobType: []
}

const jobTypeReducer = createSlice({
  name: "jobTypeReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobTypeAsyncAction.pending, (state) => {
        state.isLoadingJobType = true;
      })
      .addCase(getAllJobTypeAsyncAction.fulfilled, (state, action) => {
        state.isLoadingJobType = false;
        state.allJobType = action.payload;
      })
      .addCase(getAllJobTypeAsyncAction.rejected, (state) => {
        state.isLoadingJobType = false;
      })

      .addCase(updateJobTypeAsyncAction.pending, (state) => {
        state.isLoadingJobType = true;
      })
      .addCase(updateJobTypeAsyncAction.fulfilled, (state) => {
        state.isLoadingJobType = false;
      })
      .addCase(updateJobTypeAsyncAction.rejected, (state) => {
        state.isLoadingJobType = false;
      })


      .addCase(deleteJobTypeAsyncAction.pending, (state) => {
        state.isLoadingJobType = true;
      })
      .addCase(deleteJobTypeAsyncAction.fulfilled, (state) => {
        state.isLoadingJobType = false;
      })
      .addCase(deleteJobTypeAsyncAction.rejected, (state) => {
        state.isLoadingJobType = false;
      })
  },
});

export const { } = jobTypeReducer.actions

export default jobTypeReducer.reducer

// =================Async Action===================
export const getAllJobTypeAsyncAction = createAsyncThunk("getAllJobTypeAsyncAction",
  async () => {
    try {
      const res = await httpClient.get(`/api/v1/job-type`);

      return res.data.data;
    } catch (err) {
      console.log("🚀 ~ file: jobTypeReducer.ts:77 ~ err:", err);
      throw err;
    }
  }
);

export const createJobTypeAsyncAction = createAsyncThunk("createJobTypeAsyncAction",
  async (rowFromData: jobTypeApi) => {
    try {
      await httpClient.post(`/api/v1/job-type`, rowFromData);

      toast.success("Thêm dữ liệu thành công!", toastOptions);
    } catch (err) {
      toast.error("Thêm dữ liệu thất bại!", toastOptions);
      console.log("🚀 ~ file: jobTypeReducer.ts:79 ~ createJobTypeAsyncAction ~ err:", err);
      throw err;
    }
  }
);


export const updateJobTypeAsyncAction = createAsyncThunk("updateJobTypeAsyncAction",
  async (rowFromData: jobTypeApi) => {
    try {
      await httpClient.patch(`/api/v1/job-type/${rowFromData.id}`, rowFromData);

      toast.success("Cập nhật thành công!", toastOptions);
    } catch (err) {
      toast.error("Cập nhật thất bại!", toastOptions);
      console.log("🚀 ~ file: jobTypeReducer.ts:79 ~ updateJobTypeAsyncAction ~ err:", err);
      throw err;
    }
  }
);


export const deleteJobTypeAsyncAction = createAsyncThunk("deleteJobTypeAsyncAction",
  async (id: number) => {
    try {
      await httpClient.delete(`/api/v1/job-type/${id}`);

      toast.success("Xóa thành công!", toastOptions);
    } catch (err) {
      toast.error("Xóa thất bại!", toastOptions);
      console.log("🚀 ~ file: jobTypeReducer.ts:68 ~ deleteJobTypeAsyncAction ~ err:", err);
      throw err;
    }
  }
);