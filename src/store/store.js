import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import workoutReducer from "./slices/workoutSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    user: authReducer,
    workouts: workoutReducer,
    theme: themeReducer,
  },
});
