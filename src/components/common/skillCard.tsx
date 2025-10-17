import classes from "../../styles/componentStyles/common/skillcard.module.css";

const SkillCardComponent = (props: { title: string; img: string }) => {
  return (
    <div className={classes.container}>
      <img src={props.img} alt={props.title} className={classes.image} />
      <div className={classes.title}>{props.title}</div>
    </div>
  );
};

export default SkillCardComponent;
