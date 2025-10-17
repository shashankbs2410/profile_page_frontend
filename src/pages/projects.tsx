import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PAGE_NAMES } from "../appConstants";
import { setPageName } from "../store/slices/containerSlice";
import Projectslist from "../components/projectsComponents/projectsList";
import classes from "../styles/pageStyles/projects.module.css";
import { AppDispatch, RootState } from "../store";
import { fetchProjects } from "../store/slices/projectsSlice";

const ProjectsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { projectsList } = useSelector((state: RootState) => state.projects);

  useEffect(() => {
    dispatch(setPageName(PAGE_NAMES.PROJECTS_PAGE));
    if (projectsList.length === 0) {
      dispatch(fetchProjects());
    }
  });

  return (
    <div className={classes.projects_container}>
      <Projectslist />
    </div>
  );
};

export default React.memo(ProjectsPage);
