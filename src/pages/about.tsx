import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../store/slices/containerSlice";
import { PAGE_NAMES } from "../appConstants";
import AboutPageContainer from "../components/aboutPageComponents/aboutPage";

const AboutPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName(PAGE_NAMES.ABOUT_PAGE))
  })

  return <div><AboutPageContainer /></div>;
};

export default AboutPage;
