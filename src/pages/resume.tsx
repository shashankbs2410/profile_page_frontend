import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PAGE_NAMES } from "../appConstants";
import { setPageName } from "../store/slices/containerSlice";
import classes from "../styles/pageStyles/resume.module.css";
import PdfBox from "../components/resumeComponents/pdfBox";
import { AppDispatch } from "../store";
import ResumeDetailsComponent from "../components/resumeComponents/resumeDetails";

const ResumePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [viewPDF, setViewPDF] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setPageName(PAGE_NAMES.RESUME_PAGE));
  });

  const handleViewPDFClick = () => {
    setViewPDF(true);
  };

  const handleClosePDFClick = () => {
    setViewPDF(false);
  };

  return (
    <div className={classes.resume_container}>
      {!viewPDF && (
        <ResumeDetailsComponent pdfViewOpenFunction={handleViewPDFClick} />
      )}
      {viewPDF && (
        <PdfBox
          src="/Resume_Shashank.pdf"
          backClickHandler={handleClosePDFClick}
        />
      )}
    </div>
  );
};

export default React.memo(ResumePage);
