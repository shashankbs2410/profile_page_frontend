import { configureStore } from "@reduxjs/toolkit";
import containerReducer from "./slices/containerSlice";
import contactReducer from "./slices/contactSlice";
import resumeReducer from "./slices/resumeSlice";

export const store = configureStore({
  reducer: {
    container: containerReducer,
    contact: contactReducer,
    resume: resumeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
