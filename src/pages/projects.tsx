import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PAGE_NAMES } from "../appConstants";
import { setPageName } from "../store/slices/containerSlice";
import Projectslist from "../components/projectsComponents/projectsList";
import classes from "../styles/pageStyles/projects.module.css";

const ProjectsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName(PAGE_NAMES.PROJECTS_PAGE));
  });

  return (
    <div className={classes.projects_container}>
      <div className={classes.projects_description}>Projects</div>{" "}
      <Projectslist />
    </div>
  );
};

export default ProjectsPage;
