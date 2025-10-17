import classes from "../../styles/componentStyles/common/chip.module.css";

const ChipComponent = (props: { text: string; color: string }) => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className={classes.chip_container}
    >
      {props.text}
    </div>
  );
};

export default ChipComponent;
