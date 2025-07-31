import { createSlice } from "@reduxjs/toolkit";

export interface ResumeStateType {
  numPages: number;
  pageNumber: number;
}

const initialState: ResumeStateType = {
  numPages: 0,
  pageNumber: 1,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setNumPages: (state, action) => {
      state.numPages = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setNumPages, setPageNumber } = resumeSlice.actions;

export default resumeSlice.reducer;
