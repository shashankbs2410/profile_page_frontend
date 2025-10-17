import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from "../../styles/componentStyles/projectComponents/projectsList.module.css";
import CardComponent from "../common/card";
import PaginationComponent from "../common/paginationWrapper";

const Projectslist = () => {
  const { projectsList } = useSelector((state: RootState) => state.projects);

  return (
    <div className={classes.projects_list_container}>
      <PaginationComponent
        data={projectsList}
        itemcount={4}
        mapComponent={CardComponent}
      />
    </div>
  );
};

export default Projectslist;
