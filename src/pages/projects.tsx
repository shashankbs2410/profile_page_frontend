import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PAGE_NAMES } from "../appConstants";
import { setPageName } from "../store/slices/containerSlice";
import Projectslist from "../components/projectsComponents/projectsList";
import classes from "../styles/pageStyles/projects.module.css";
import { AppDispatch } from "../store";
import { fetchProjects } from "../store/slices/projectsSlice";

const ProjectsPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setPageName(PAGE_NAMES.PROJECTS_PAGE));
    dispatch(fetchProjects());
  });

  return (
    <div className={classes.projects_container}>
      <Projectslist />
    </div>
  );
};

export default React.memo(ProjectsPage);
