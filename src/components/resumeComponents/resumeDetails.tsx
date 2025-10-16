import { useSelector } from "react-redux";
import classes from "../../styles/componentStyles/resumeComponents/resumedetails.module.css";
import { RootState } from "../../store";
import pdfImage from "../../assets/icon_pdf.png";
import TimeLineComponent from "../common/timeLine";
import { careerData } from "./resumeDetailsConstants";

const ResumeDetailsComponent = (props: { pdfViewOpenFunction: any }) => {
  const { mode } = useSelector((state: RootState) => state.container);

  return (
    <div className={classes.container}>
      <div className={classes.left_section}>
        <TimeLineComponent data={careerData} />
      </div>
      <div className={classes.divider} />
      <div className={classes.right_section}>
        <div className={classes.tech_stack}>Technical Skills</div>
        <button
          className={`${classes.pdf_open_button} ${classes[mode]}`}
          onClick={props.pdfViewOpenFunction}
        >
          Open PDF View
          <img src={pdfImage} alt="PDF View" />
        </button>
      </div>
    </div>
  );
};

export default ResumeDetailsComponent;
