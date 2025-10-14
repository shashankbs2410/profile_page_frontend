import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PAGE_NAMES } from "../appConstants";
import { setPageName } from "../store/slices/containerSlice";
import Projectslist from "../components/projectsComponents/projectsList";
import classes from "../styles/pageStyles/projects.module.css";
import { RootState, AppDispatch } from "../store";
import { fetchProjects } from "../store/slices/projectsSlice";

const ProjectsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.container.mode);

  useEffect(() => {
    dispatch(setPageName(PAGE_NAMES.PROJECTS_PAGE));
    dispatch(fetchProjects())
  });

  return (
    <div className={classes.projects_container}>
      <div className={classes.projects_description}>Tech Stack</div>
      <div className={`${classes.divider} ${classes[mode]}`} />
      <Projectslist />
    </div>
  );
};

export default React.memo(ProjectsPage);
