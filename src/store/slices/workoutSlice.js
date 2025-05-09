import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getWorkouts,
  addWorkout as addWorkoutAPI,
  deleteWorkout as deleteWorkoutAPI,
  duplicateWorkout as duplicateWorkoutAPI,
  updateWorkout as updateWorkoutAPI,
  getWorkoutByActivity as getWorkoutByActivityAPI,
} from "../../api/workoutsAPI";
import { toast } from "react-toastify";

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
  status: "idle",
  error: null,
};

const workoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
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
        state.status = "failed";
        state.error = action.error.message;
      });

    // For adding a workout
    builder
      .addCase(addWorkout.pending, function (state) {
        state.status = "adding";
      })
      .addCase(addWorkout.fulfilled, function (state, action) {
        state.status = "addedWorkout";
        state.workouts = [...state.workouts, action.payload];

        toast.success("Workout added successfully");
      })
      .addCase(addWorkout.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        toast.error("Failed to add workout");
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

        toast.success("Workout deleted successfully");
      })
      .addCase(deleteWorkout.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        toast.error("Failed to delete workout");
      });

    // For duplicating a workout
    builder
      .addCase(duplicateWorkout.pending, function (state) {
        state.status = "duplicating";
      })
      .addCase(duplicateWorkout.fulfilled, function (state, action) {
        state.status = "duplicated";
        state.workouts = [...state.workouts, action.payload];

        toast.success("Workout duplicated successfully");
      })
      .addCase(duplicateWorkout.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        toast.error("Failed to duplicate workout");
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

        toast.success("Workout updated successfully");
      })
      .addCase(updateWorkout.rejected, function (state, action) {
        state.status = "failed";
        state.error = action.error.message;

        toast.error("Failed to update workout");
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

        toast.error("Failed to get workout by activity");
      });
  },
});

export const { resetStatus } = workoutSlice.actions;
export default workoutSlice.reducer;
