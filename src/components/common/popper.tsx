import classes from "../../styles/componentStyles/common/popper.module.css";

const PopperComponent = (props: {
  color?: string;
  textColor?: string;
  text?: string;
  timerColor?: string;
}) => {
  return (
    <div
      className={classes.popper_container}
      style={{ backgroundColor: props.color ?? "#009951" }}
    >
      <div
        className={classes.popper_text}
        style={{ color: props.textColor ?? "#FFFFFF" }}
      >{`${props.text ?? "Text Message"}`}</div>
      <div
        className={classes.timeout_bar}
        style={{ backgroundColor: props.timerColor ?? "#FFFFFF" }}
      />
    </div>
  );
};

export default PopperComponent;
