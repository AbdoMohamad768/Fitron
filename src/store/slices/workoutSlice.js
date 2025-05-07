import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getWorkouts,
  addWorkout as addWorkoutAPI,
  deleteWorkout as deleteWorkoutAPI,
  duplicateWorkout as duplicateWorkoutAPI,
  updateWorkout as updateWorkoutAPI,
  getWorkoutByActivity as getWorkoutByActivityAPI,
} from "../../api/workoutsAPI";

export const fetchWorkouts = createAsyncThunk(
  "workouts/fetchWorkouts",
  getWorkouts
);
export const addWorkout = createAsyncThunk(
  "workouts/addWorkout",
  addWorkoutAPI
);
export const deleteWorkout = createAsyncThunk(
  "workouts/deleteWorkout",
  deleteWorkoutAPI
);
export const duplicateWorkout = createAsyncThunk(
  "workouts/duplicateWorkout",
  duplicateWorkoutAPI
);
export const updateWorkout = createAsyncThunk(
  "workouts/updateWorkout",
  updateWorkoutAPI
);
export const getWorkoutByActivity = createAsyncThunk(
  "workouts/getByActivityWorkout",
  getWorkoutByActivityAPI
);

const initialState = {
  workout: null,
  workouts: [],
  status: null,
  error: null,
};

const workoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    // For fetching workouts
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

    // For adding a workout
    builder
      .addCase(addWorkout.pending, function (state) {
        state.status = "loading";
      })
      .addCase(addWorkout.fulfilled, function (state, action) {
        state.status = "addedWorkout";
        state.workouts = [...state.workouts, action.payload];
      })
      .addCase(addWorkout.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        console.log(action.error.message);
      });

    // For deleting a workout
    builder
      .addCase(deleteWorkout.pending, function (state) {
        state.status = "deleting";
      })
      .addCase(deleteWorkout.fulfilled, function (state, action) {
        state.status = "deleted";

        state.workouts = state.workouts.filter(
          (workout) => workout.id !== action.payload
        );
      })
      .addCase(deleteWorkout.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        console.log(action.error.message);
      });

    // For duplicating a workout
    builder
      .addCase(duplicateWorkout.pending, function (state) {
        state.status = "duplicating";
      })
      .addCase(duplicateWorkout.fulfilled, function (state, action) {
        state.status = "duplicated";
        state.workouts = [...state.workouts, action.payload];
      })
      .addCase(duplicateWorkout.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        console.log(action.error.message);
      });

    // For updating a workout
    builder
      .addCase(updateWorkout.pending, function (state) {
        state.status = "updating";
      })
      .addCase(updateWorkout.fulfilled, function (state, action) {
        state.status = "updated";
        state.workouts = state.workouts.map((workout) =>
          workout.id === action.payload.id ? action.payload : workout
        );
      })
      .addCase(updateWorkout.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        console.log(action.error.message);
      });

    // For getting a workout by activity
    builder
      .addCase(getWorkoutByActivity.pending, function (state) {
        state.status = "getting";
      })
      .addCase(getWorkoutByActivity.fulfilled, function (state, action) {
        state.status = "got";
        state.workout = action.payload;
      })
      .addCase(getWorkoutByActivity.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        console.log(action.error.message);
      });
  },
});

export default workoutSlice.reducer;
