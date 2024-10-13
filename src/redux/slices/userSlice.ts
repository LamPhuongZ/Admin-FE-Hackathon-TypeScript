import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SLICE_NAMESPACE } from "../../utils/settings";

type User = {
  userName: string;
  password: string;
  fullName: string;
  email: string;
  phone: string;
};

type InitialStateTypes = {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
};

const initialState: InitialStateTypes = {
  user: null,
  isLoading: false,
  isError: false,
};

// Đăng nhập
export const fetchLoginAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/login`,
  async (values: { userName: string; password: string }, thunkApi) => {
    try {
    //   const response = await loginUser(values);
      // lưu accessToken từ api trả về vào localStorage
    //   const { accessToken } = response.data;
    //   localStorage.setItem("accessToken", accessToken);
      return values;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: SLICE_NAMESPACE,
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("accessToken");
      state.user = null;
    },
    cleanUpUser: (state) => {
      state.isError = false;
      state.isLoading = false;
    },
    updateInfoUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Đăng nhập
    builder.addCase(fetchLoginAction.pending, (state) => {
      state.isLoading = true;
    });
    // builder.addCase(
    //     fetchLoginAction.fulfilled,
    //   (state, action: PayloadAction<User>) => {
    //     state.user = action.payload;
    //     state.isLoading = false;
    //   }
    // );
    builder.addCase(fetchLoginAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
export const { logout, cleanUpUser, updateInfoUser } = userSlice.actions;
