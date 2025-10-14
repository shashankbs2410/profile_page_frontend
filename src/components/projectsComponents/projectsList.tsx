import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from "../../styles/componentStyles/projectComponents/projectsList.module.css";
import leftArrow from "../../assets/icon_left_arrow.png";
import rightArrow from "../../assets/icon_right_arrow.png";
import CardComponent from "../common/card";

const Projectslist = () => {
  const { mode } = useSelector((state: RootState) => state.container);
  const { projectsList } = useSelector((state: RootState) => state.projects);
  const [selectedPage, setSelectedPage] = useState(1);
  return (
    <div className={classes.projects_list_container}>
      <div className={`${classes.projects_list_box} ${classes[mode]}`}>
        <div className={classes.container_title}>Projects</div>
        <div className={classes.projects_viewer}>
          <div className={classes.buffer}>
            {projectsList.length > 0 && selectedPage !== 1 && (
              <img
                src={leftArrow}
                className={classes.arrow}
                onClick={() => setSelectedPage(selectedPage - 1)}
              />
            )}
          </div>
          <div className={classes.projects_box}>
            {projectsList.length > 0 &&
              projectsList
                .slice((selectedPage - 1) * 4, selectedPage * 4)
                .map((project) => (
                  <CardComponent key={project.title} {...project} />
                ))}
          </div>
          <div className={classes.buffer}>
            {projectsList.length > 0 &&
              selectedPage !== Math.ceil(projectsList.length / 4) && (
                <img
                  src={rightArrow}
                  className={classes.arrow}
                  onClick={() => setSelectedPage(selectedPage + 1)}
                />
              )}
          </div>
        </div>
        <div className={classes.page_dots}>
          {Array(Math.ceil(projectsList.length / 4))
            .fill(null)
            .map((_, index) => (
              <div
                key={`page-${index}`}
                className={`${classes.page_dot} ${
                  selectedPage === index + 1 ? classes.selected : undefined
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projectslist;
