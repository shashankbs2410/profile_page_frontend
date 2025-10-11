import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PAGE_NAMES } from "../appConstants";
import { setPageName } from "../store/slices/containerSlice";
import classes from "./resume.module.css";
import PdfBox from "../components/resumeComponents/pdfBox";

const ResumePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName(PAGE_NAMES.RESUME_PAGE));
  });

  return (
    <div className={classes.resume_container}>
      <PdfBox src="/src/assets/Resume_Shashank.pdf" />
    </div>
  );
};

export default ResumePage;
