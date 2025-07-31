import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PAGE_NAMES } from "../appConstants";
import { setPageName } from "../store/slices/containerSlice";
import ContactLinks from "../components/contactComponents/contactLinks";
import MessageComponent from "../components/contactComponents/message";
import classes from "./contact.module.css";

const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName(PAGE_NAMES.CONTACT_PAGE));
  });

  return (
    <div className={classes.contact_container}>
      <MessageComponent />
      <ContactLinks />
    </div>
  );
};

export default ContactPage;
