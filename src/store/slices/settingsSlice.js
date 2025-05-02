import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSettings } from "../../api/settingsAPI";
import { updateUser } from "../../api/authAPI";

const initialState = {
  status: "",
  error: null,
  settings:{}
};

export const fetchSettings = createAsyncThunk(
  "settings/fetchSettings",
  getSettings
);

export const UpdateUser = createAsyncThunk(
  "settings/updateUserla"
  ,updateUser
);



const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(fetchSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});

export default settingsSlice.reducer;

