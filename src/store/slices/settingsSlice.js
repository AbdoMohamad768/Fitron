import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSettings, updateSettings } from "../../api/settingsAPI";
import { updateUser } from "../../api/authAPI";

const initialState = {
  status: "",
  error: null,
  settings: {},
};

export const fetchSettings = createAsyncThunk(
  "settings/fetchSettings",
  getSettings
);

export const UpdateProfile = createAsyncThunk(
  "settings/updateProfile",
  updateSettings
);

export const UpdateDisplay = createAsyncThunk(
  "settings/updateDisplay",
  updateUser
);

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.settings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.settings = action.payload;
      })
      .addCase(fetchSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default settingsSlice.reducer;
export const { setProfile } = settingsSlice.actions;
