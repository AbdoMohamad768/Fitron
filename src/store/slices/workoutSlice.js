import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWorkouts } from "../../api/workoutsAPI";



export const fetchWorkouts = createAsyncThunk(
  "workouts/fetchWorkouts",
    getWorkouts
);

const initialState = {
  workouts: [],
  status: null,
  error: null,
};

const workoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(fetchWorkouts.pending, function (state) {
        state.status = "loading";
      })
      .addCase(fetchWorkouts.fulfilled, function (state, action) {
        state.status = "success";
        state.workouts = action.payload;
      })
      .addCase(fetchWorkouts.rejected, function (state, action) {
        state.status = "faild";
        state.error = action.error.message;
      });
  },
});

export default workoutSlice.reducer;
