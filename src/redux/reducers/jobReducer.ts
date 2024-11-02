import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../Utils/config";

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
