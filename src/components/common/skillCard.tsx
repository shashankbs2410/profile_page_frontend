import classes from "../../styles/componentStyles/common/skillcard.module.css";

const SkillCardComponent = (props: {
  title: string;
  img: string;
  mode: "dark" | "light";
}) => {
  return (
    <div className={`${classes.container} ${classes[props.mode]}`}>
      <img
        src={props.img}
        alt={props.title}
        className={`${classes.image} ${classes[props.mode]}`}
      />
      <div className={classes.title}>{props.title}</div>
    </div>
  );
};

export default SkillCardComponent;
