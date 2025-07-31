import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../store/slices/containerSlice";
import { PAGE_NAMES } from "../appConstants";

const AboutPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName(PAGE_NAMES.ABOUT_PAGE))
  })

  return <div>About </div>;
};

export default AboutPage;
