import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../store/slices/containerSlice";
import { PAGE_NAMES } from "../appConstants";
import AboutPageContainer from "../components/aboutPageComponents/aboutPage";
import { AppDispatch } from "../store";

const AboutPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setPageName(PAGE_NAMES.ABOUT_PAGE));
  });

  return (
    <div>
      <AboutPageContainer />
    </div>
  );
};

export default React.memo(AboutPage);
