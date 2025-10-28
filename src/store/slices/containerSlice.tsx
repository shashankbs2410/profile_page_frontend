import { createSlice } from "@reduxjs/toolkit";
import { PAGE_NAMES } from "../../appConstants";

export interface ContainerStateType {
  mode: "dark" | "light";
  pageName: string;
  screenWidth: number;
  screenHeight: number;
}

const initialState: ContainerStateType = {
  mode: "dark",
  pageName: PAGE_NAMES.ABOUT_PAGE,
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
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
    setWindowWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
    setWindowHeight: (state, action) => {
      state.screenHeight = action.payload;
    },
  },
});

export const { setMode, setPageName, setWindowWidth, setWindowHeight } =
  containerSlice.actions;

export default containerSlice.reducer;
