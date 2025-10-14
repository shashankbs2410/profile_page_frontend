import { configureStore } from "@reduxjs/toolkit";
import containerReducer from "./slices/containerSlice";
import contactReducer from "./slices/contactSlice";
import resumeReducer from "./slices/resumeSlice";
import projectsReducer from "./slices/projectsSlice";

export const store = configureStore({
  reducer: {
    container: containerReducer,
    contact: contactReducer,
    resume: resumeReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
