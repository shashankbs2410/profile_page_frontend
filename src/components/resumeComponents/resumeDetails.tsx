import { useSelector } from "react-redux";
import classes from "../../styles/componentStyles/resumeComponents/resumedetails.module.css";
import { RootState } from "../../store";
import pdfImage from "../../assets/icon_pdf.png";
import TimeLineComponent from "../common/timeLine";
import { careerData, skills } from "./resumeDetailsConstants";
import PaginationComponent from "../common/paginationWrapper";
import SkillCardComponent from "../common/skillCard";

const ResumeDetailsComponent = (props: { pdfViewOpenFunction: any }) => {
  const { mode } = useSelector((state: RootState) => state.container);

  return (
    <div className={`${classes.container} ${classes[mode]}`}>
      <div className={classes.left_section}>
        <TimeLineComponent data={careerData} />
      </div>
      <div className={`${classes.divider} ${classes[mode]}`} />
      <div className={classes.right_section}>
        <div className={classes.tech_stack}>
          <span className={classes.ts_title}>TECHNICAL SKILLS</span>
          <div className={classes.ts_container}>
            <PaginationComponent
              data={skills}
              itemcount={6}
              mapComponent={SkillCardComponent}
            />
          </div>
        </div>
        <button
          className={`${classes.pdf_open_button} ${classes[mode]}`}
          onClick={props.pdfViewOpenFunction}
        >
          Open PDF View
          <img
            src={pdfImage}
            alt="PDF View"
            className={`${classes.pdf_icon} ${classes[mode]}`}
          />
        </button>
      </div>
    </div>
  );
};

export default ResumeDetailsComponent;
