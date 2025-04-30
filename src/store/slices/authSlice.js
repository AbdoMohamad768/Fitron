import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  login as loginAPI,
  logout as logoutAPI,
  signup as signupAPI,
} from "../../api/authAPI";

export const login = createAsyncThunk("auth/login", loginAPI);

export const logout = createAsyncThunk("auth/logout", logoutAPI);

export const signup = createAsyncThunk("auth/signup", signupAPI);

const initialState = {
  user: {},
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: function (state, action) {},
  },
  extraReducers: function (builder) {
    builder
      .addCase(login.pending, function (state) {
        state.status = "loading";
      })
      .addCase(login.fulfilled, function (state, action) {
        state.status = "success";
        state.user = action.payload;

        console.log(action.payload);
      })
      .addCase(login.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(logout.pending, function (state) {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, function (state) {
        state.status = "logged-out";
        state.user = initialState.user;
      })
      .addCase(logout.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(signup.pending, function (state) {
        state.status = "loading";

        console.log("pending signup");
      })
      .addCase(signup.fulfilled, function (state) {
        state.status = "signed-out";
        state.user = initialState.user;

        console.log("Signed up successfully");
      })
      .addCase(signup.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        console.log("Failed to sign up", action.error.message);
      });
  },
});

export default authSlice.reducer;
