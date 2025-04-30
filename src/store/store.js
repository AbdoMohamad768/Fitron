import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import workoutReducer from "./slices/workoutSlice";
import themeReducer from "./slices/themeSlice";
import settingsReducer from "./slices/settingsSlice";

export const store = configureStore({
  reducer: {
    user: authReducer,
    workouts: workoutReducer,
    theme: themeReducer,
    settings: settingsReducer,
  },
});
