import { contactLinks } from "./contactLinksConstants";
import classes from "../../styles/componentStyles/contactComponents/contactLinks.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import mailIcon from "../../assets/icon_mail.png";
import copyIcon from "../../assets/icon_copy.png";
import tickIcon from "../../assets/icon_tick.png";
import React, { useEffect, useState } from "react";

const ContactLinks = () => {
  const { mode } = useSelector((state: RootState) => state.container);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied === true) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  return (
    <div className={classes.links_container}>
      <div className={`${classes.email} ${classes[mode]}`}>
        <span className={classes.email_text}>shashankbs2410@gmail.com</span>
        <span className={classes.email_icons_container}>
          <a
            href="mailto:shashankbs2410@gmail.com"
            className={`${classes.mail_icon} ${classes[mode]}`}
          >
            <img
              src={mailIcon}
              title="mail to"
              alt="mail to"
              className={`${classes.mail_to_icon} ${classes[mode]}`}
            />
          </a>
          <a
            onClick={() => {
              navigator.clipboard.writeText("shashankbs2410@gmail.com");
              setCopied(true);
            }}
            className={`${classes.mail_icon} ${classes[mode]} ${
              copied && classes.copied
            }`}
          >
            <img
              src={copied ? tickIcon : copyIcon}
              title="copy mail to clipboard"
              alt="copy mail to clipboard"
              className={`${classes.copy_icon} ${classes[mode]}`}
            />
            {copied && <div className={classes.copied_text}>Copied</div>}
          </a>
        </span>
      </div>
      <div className={classes.link_icons_container}>
        {contactLinks.map((link) => (
          <a
            className={`${classes.link_icon} ${classes[mode]}`}
            href={link.link}
            target="_blank"
            key={link.name}
          >
            <img
              title={link.name}
              alt={link.name}
              src={link.icon}
              className={`${classes.icon} ${classes[mode]}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ContactLinks);
