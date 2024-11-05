import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../Utils/config";
import { toastOptions } from "../../Utils/toastOptions";
import { toast } from "react-toastify";

// Định nghĩa kiểu dữ liệu
export interface listJobeApi {
    totalElements:    number;
    totalPages:       number;
    size:             number;
    number:           number;
    content:          jobApi[];
    first:            boolean;
    last:             boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface jobApi {
    jobId:             number;
    title:             string;
    description:       string;
    images:            Image[];
    duration:          number;
    phone:             string;
    address:           string;
    districtId:        number;
    provinceId:        number;
    contactPerson:     string;
    startDate:         Date;
    endDate:           Date;
    postedDate:        Date;
    jobType:           JobType;
    jobSkills:         JobSkill[];
    jobApprovalStatus: string;
    isDeleted:         boolean;
}

export interface Image {
    url:                string;
    cloudiaryPuclicUrl: string;
    typeOfImg:          string;
}

export interface JobSkill {
    id:          number;
    skill:       string;
    description: string;
}

export interface JobType {
    id:          number;
    name:        string;
    description: string;
    minPrice:    number;
    maxPrice:    number;
}

export interface listJobState {
    isLoadingListJob: boolean;
    allListJob: listJobeApi | null;
}

// Khởi tạo state ban đầu
const initialState: listJobState = {
    isLoadingListJob: false,
    allListJob: null,
};

// Tạo reducer cho job
const jobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allListJobAsyncAction.pending, (state) => {
        state.isLoadingListJob = true;
      })
      .addCase(allListJobAsyncAction.fulfilled, (state, action) => {
        state.isLoadingListJob = false;
        state.allListJob = action.payload;
      })
      .addCase(allListJobAsyncAction.rejected, (state) => {
        state.isLoadingListJob = false;
      })
      
      .addCase(acceptJobAsyncAction.pending, (state) => {
        state.isLoadingListJob = true;
      })
      .addCase(acceptJobAsyncAction.fulfilled, (state) => {
        state.isLoadingListJob = false;
      })
      .addCase(acceptJobAsyncAction.rejected, (state) => {
        state.isLoadingListJob = false;
      })
      
      .addCase(rejectJobAsyncAction.pending, (state) => {
        state.isLoadingListJob = true;
      })
      .addCase(rejectJobAsyncAction.fulfilled, (state) => {
        state.isLoadingListJob = false;
      })
      .addCase(rejectJobAsyncAction.rejected, (state) => {
        state.isLoadingListJob = false;
      });
  },
});

export const {} = jobReducer.actions;
export default jobReducer.reducer;

// =================Async Action===================
export const allListJobAsyncAction = createAsyncThunk(
  "allListJobAsyncAction",
  async ({
    page = 0,
    size = 10,
    sortBy = "id",
    direction = "desc",
    title = "",
    districtId,
    provinceId,
    startDate,
    endDate,
    jobTypeId,
    approval = "ALL",
  }: {
    page?: number;
    size?: number;
    sortBy?: string;
    direction?: string;
    title?: string;
    districtId?: number;
    provinceId?: number;
    startDate?: string;
    endDate?: string;
    jobTypeId?: number;
    approval?: string;
  }) => {
    try {
      // Tạo URL với các tham số động (chỉ thêm nếu có giá trị)
      const url = `/api/v1/job?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}` +
                  `${title ? `&title=${title}` : ""}` +
                  `${districtId ? `&districtId=${districtId}` : ""}` +
                  `${provinceId ? `&provinceId=${provinceId}` : ""}` +
                  `${startDate ? `&startDate=${startDate}` : ""}` +
                  `${endDate ? `&endDate=${endDate}` : ""}` +
                  `${jobTypeId ? `&jobTypeId=${jobTypeId}` : ""}` +
                  `${approval ? `&approval=${approval}` : ""}`;

      // Gọi API lấy dữ liệu
      const res = await httpClient.get(url);
      return res.data.data;
    } catch (err) {
      console.error("🚀 ~ allListJobAsyncAction error:", err);
      throw err;
    }
  }
);


export const acceptJobAsyncAction = createAsyncThunk("acceptJobAsyncAction",
  async (id: number) => {
    try {
      await httpClient.post(`/api/v1/job/toggle-accept/${id}`);

      toast.success("Xác nhận việc làm thành công!", toastOptions);
    } catch (err) {
      toast.error("Xác nhận việc làm thất bại!", toastOptions);
      console.log("🚀 ~ file: jobReducer.ts:150 ~ err:", err);
      throw err;
    }
  }
);

export const rejectJobAsyncAction = createAsyncThunk("rejectJobAsyncAction",
  async (id: number) => {
    try {
      await httpClient.post(`/api/v1/job/toggle-reject/${id}`);

      toast.success("Từ chối việc làm thành công!", toastOptions);
    } catch (err) {
      toast.error("Từ chối việc làm thất bại!", toastOptions);
      console.log("🚀 ~ file: jobReducer.ts:164 ~ err:", err);
      throw err;
    }
  }
);