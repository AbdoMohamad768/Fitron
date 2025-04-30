import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async function () {}
);

const initialState = {
  user: {},
  status: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: function (state, action) {},
    logout: function (state, action) {
      state = initialState;
    },
    signup: function (state, action) {},
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchUser.pending, function (state, action) {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, function (state, action) {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { login, logout, signup } = authSlice.actions;

export default authSlice.reducer;
