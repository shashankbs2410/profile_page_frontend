import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import classes from "./message.module.css";
import resetIcon from "../../assets/icon_reset.png";
import sendIcon from "../../assets/icon_send.png";
import {
  resetMassage,
  setEmail,
  setMobile,
  setName,
  setText,
  postMessage,
  setIsSendSuccess,
} from "../../store/slices/contactSlice";
import PopperComponent from "../common/popper";
import { useEffect, useState } from "react";
import { failedMessage, successMessage } from "./messageConstants";
import LoaderComponent from "../common/loader";

const MessageComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { mode } = useSelector((state: RootState) => state.container);
  const { message, isSendSuccess, sending } = useSelector(
    (state: RootState) => state.contact
  );
  const [showPopper, setShowPopper] = useState<boolean>(false);

  useEffect(() => {
    if (isSendSuccess !== null) {
      setShowPopper(true);
    }
  }, [isSendSuccess]);

  useEffect(() => {
    if (showPopper === true) {
      setTimeout(() => {
        setShowPopper(false);
        dispatch(setIsSendSuccess(null));
      }, 4000);
    }
  }, [showPopper]);

  return (
    <div className={classes.message_container}>
      {showPopper && (
        <PopperComponent
          color={isSendSuccess ? "#009951" : "#900B09"}
          text={isSendSuccess ? successMessage : failedMessage}
        />
      )}
      <div className={`${classes.message_box} ${classes[mode]}`}>
        <span className={classes.title}>Send a Message</span>
        <div className={classes.name_container}>
          <span>
            Name<span className={classes.super_script}>*</span>
          </span>
          <input
            type="text"
            className={classes[mode]}
            value={message.name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </div>
        <div className={classes.email_mobile_container}>
          <div className={classes.email_container}>
            <span>
              Email ID<span className={classes.super_script}>*</span>
            </span>
            <input
              type="email"
              className={classes[mode]}
              value={message.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
          </div>
          <div className={classes.mobile_container}>
            <span>{`Phone number (optional)`}</span>
            <input
              type="number"
              className={`${classes.hide_arrow} ${classes[mode]}`}
              value={message.mobile}
              onChange={(e) => dispatch(setMobile(e.target.value))}
            />
          </div>
        </div>
        <div className={classes.message_input_container}>
          <span>
            Message<span className={classes.super_script}>*</span>
          </span>
          <textarea
            className={classes[mode]}
            value={message.text}
            onChange={(e) => dispatch(setText(e.target.value))}
          />
        </div>
        <div className={classes.message_buttons}>
          <button
            className={`${classes.reset_button} ${classes[mode]}`}
            onClick={() => dispatch(resetMassage())}
          >
            <span>Reset</span>
            <img src={resetIcon} />
          </button>
          <button
            className={`${classes.send_button} ${classes[mode]} ${
              (message.name.length === 0 ||
                message.email.length === 0 ||
                message.text.length === 0) &&
              !sending
                ? classes.disabled
                : ""
            }`}
            onClick={() => {
              dispatch(postMessage(message));
              dispatch(resetMassage());
            }}
          >
            {!sending && (
              <span className={classes.send_button_content}>
                <span>Send</span>
                <img src={sendIcon} />
              </span>
            )}
            {sending && <LoaderComponent />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
