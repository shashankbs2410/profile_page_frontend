import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardDetailstype } from "../../components/common/card";

export const fetchProjects = createAsyncThunk(
  "data/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://profile-page-backend-plum.vercel.app/projects`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

type initialStateType = {
  projectsList: CardDetailstype[];
  projectsLoading: boolean;
};

const initialState: initialStateType = {
  projectsList: [],
  projectsLoading: false,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.projectsLoading = true;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projectsList = action.payload.map((project: any) => {
        return {
          title: project.title,
          description: project.description,
          link: project.link,
          chips: project.techstack,
        };
      });
      state.projectsLoading = false;
    });
    builder.addCase(fetchProjects.rejected, (state) => {
      state.projectsLoading = false;
    });
  },
});

export default projectsSlice.reducer;
