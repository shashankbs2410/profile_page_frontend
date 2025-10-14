import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PAGE_NAMES } from "../appConstants";
import { setPageName } from "../store/slices/containerSlice";
import classes from "../styles/pageStyles/resume.module.css";
import PdfBox from "../components/resumeComponents/pdfBox";
import { AppDispatch } from "../store";

const ResumePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setPageName(PAGE_NAMES.RESUME_PAGE));
  });

  return (
    <div className={classes.resume_container}>
      <PdfBox src="/src/assets/Resume_Shashank.pdf" />
    </div>
  );
};

export default React.memo(ResumePage);
