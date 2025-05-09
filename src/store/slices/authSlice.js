import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  login as loginAPI,
  logout as logoutAPI,
  signup as signupAPI,
  updateUser as updateUserAPI,
} from "../../api/authAPI";
import { toast } from "react-toastify";

export const login = createAsyncThunk("auth/login", loginAPI);

export const logout = createAsyncThunk("auth/logout", logoutAPI);

export const signup = createAsyncThunk("auth/signup", signupAPI);

export const updateUser = createAsyncThunk("auth/updateUser", updateUserAPI);

const initialState = {
  user: {},
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(login.pending, function (state) {
        state.status = "loading";
      })
      .addCase(login.fulfilled, function (state, action) {
        state.status = "success";
        state.user = action.payload;

        toast.success("Login successful");
      })
      .addCase(login.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        toast.error("Login failed");
      });

    builder
      .addCase(logout.pending, function (state) {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, function (state) {
        state.status = "logged-out";
        state.user = initialState.user;

        toast.success("Logout successful");
      })
      .addCase(logout.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        toast.error("Logout failed");
      });

    builder
      .addCase(signup.pending, function (state) {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, function (state, action) {
        state.status = "signed-up";
        state.user = action.payload;

        toast.success("Signup successful");
      })
      .addCase(signup.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        toast.error("Signup failed");
      });

    builder
      .addCase(updateUser.pending, function (state) {
        state.status = "updating";
      })
      .addCase(updateUser.fulfilled, function (state, action) {
        state.status = "updated";
        state.user = { ...state.user, ...action.payload };

        toast.success("Update successful");
      })
      .addCase(updateUser.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        toast.error("Update failed");
      });
  },
});

export default authSlice.reducer;
export const { resetStatus } = authSlice.actions;
