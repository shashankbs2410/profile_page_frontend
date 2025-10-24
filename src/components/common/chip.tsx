import classes from "../../styles/componentStyles/common/chip.module.css";

const ChipComponent = (props: {
  text: string;
  color: string;
  mode: "dark" | "light";
}) => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className={`${classes.chip_container} ${classes[props.mode]}`}
    >
      {props.text}
    </div>
  );
};

export default ChipComponent;
