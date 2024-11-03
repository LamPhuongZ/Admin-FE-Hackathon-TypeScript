import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { httpClient } from '../../Utils/config';
import { toast } from 'react-toastify';
import { toastOptions } from '../../Utils/toastOptions';

export interface skillApi {
  id: number;
  skill: string;
  description: string;
}

export interface jobSkillState {
  isLoadingJobSkill: boolean;
  allSkill: skillApi[];
}

const initialState = {
  isLoadingJobSkill: false,
  allSkill: []
}

const skillReducer = createSlice({
  name: "skillReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSkillAsyncAction.pending, (state) => {
        state.isLoadingJobSkill = true;
      })
      .addCase(getAllSkillAsyncAction.fulfilled, (state, action) => {
        state.isLoadingJobSkill = false;
        state.allSkill = action.payload;
      })
      .addCase(getAllSkillAsyncAction.rejected, (state) => {
        state.isLoadingJobSkill = false;
      })

      .addCase(updateSkillAsyncAction.pending, (state) => {
        state.isLoadingJobSkill = true;
      })
      .addCase(updateSkillAsyncAction.fulfilled, (state) => {
        state.isLoadingJobSkill = false;
      })
      .addCase(updateSkillAsyncAction.rejected, (state) => {
        state.isLoadingJobSkill = false;
      })


      .addCase(deleteSkillAsyncAction.pending, (state) => {
        state.isLoadingJobSkill = true;
      })
      .addCase(deleteSkillAsyncAction.fulfilled, (state) => {
        state.isLoadingJobSkill = false;
      })
      .addCase(deleteSkillAsyncAction.rejected, (state) => {
        state.isLoadingJobSkill = false;
      })
  },
});

export const { } = skillReducer.actions

export default skillReducer.reducer

// =================Async Action===================
export const getAllSkillAsyncAction = createAsyncThunk("getAllSkillAsyncAction",
  async () => {
    try {
      const res = await httpClient.get(`/api/v1/job-skill`);

      return res.data.data;
    } catch (err) {
      console.log("🚀 ~ file: skillReducer.ts:43 ~ err:", err);
      throw err;
    }
  }
);


export const updateSkillAsyncAction = createAsyncThunk("updateSkillAsyncAction",
  async (rowFromData: skillApi) => {
    try {
      await httpClient.patch(`/api/v1/job-skill/${rowFromData.id}`, rowFromData);

      toast.success("Cập nhật thành công!", toastOptions);
    } catch (err) {
      toast.error("Cập nhật thất bại!", toastOptions);
      console.log("🚀 ~ file: skillReducer.ts:79 ~ updateSkillAsyncAction ~ err:", err);
      throw err;
    }
  }
);


export const deleteSkillAsyncAction = createAsyncThunk("deleteSkillAsyncAction",
  async (id: number) => {
    try {
      await httpClient.delete(`/api/v1/job-skill/${id}`);

      toast.success("Xóa thành công!", toastOptions);
    } catch (err) {
      toast.error("Xóa thất bại!", toastOptions);
      console.log("🚀 ~ file: skillReducer.ts:68 ~ deleteSkillAsyncAction ~ err:", err);
      throw err;
    }
  }
);