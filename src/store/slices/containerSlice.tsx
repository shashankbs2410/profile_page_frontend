import { createSlice } from "@reduxjs/toolkit";
import { PAGE_NAMES } from "../../appConstants";

export interface ContainerStateType {
  mode: "dark" | "light";
  pageName: string;
}

const initialState: ContainerStateType = {
  mode: "dark",
  pageName: PAGE_NAMES.ABOUT_PAGE,
};

const containerSlice = createSlice({
  name: "container",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setPageName: (state, action) => {
      state.pageName = action.payload;
    },
  },
});

export const { setMode, setPageName } = containerSlice.actions;

export default containerSlice.reducer;
