import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSettings, updateSettings } from "../../api/settingsAPI";
import { toast } from "react-toastify";

const initialState = {
  status: "idle",
  error: null,
  settings: {},
};

export const fetchSettings = createAsyncThunk(
  "settings/fetchSettings",
  getSettings
);

export const UpdateSettings = createAsyncThunk(
  "settings/updateSettings",
  updateSettings
);

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
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

        toast.error("Settings fetch failed");
      });

    builder
      .addCase(UpdateSettings.pending, (state) => {
        state.status = "updating";
      })
      .addCase(UpdateSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.settings = action.payload;

        toast.success("Settings updated successfully");
      })
      .addCase(UpdateSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;

        toast.error("Settings update failed");
      });
  },
});

export default settingsSlice.reducer;
export const { resetStatus } = settingsSlice.actions;
