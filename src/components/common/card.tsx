import ChipComponent from "./chip";
import redirectIcon from "../../assets/icon_redirect.png";
import classes from "../../styles/componentStyles/common/card.module.css";

export type CardDetailstype = {
  title: string;
  description?: string;
  link?: string;
  chips?: string[];
  mode: "dark" | "light";
};

const CardComponent = (props: CardDetailstype) => {
  return (
    <div key={props.title} className={`${classes.box} ${classes[props.mode]}`}>
      <a href={props.link} target="_blank">
        <img
          className={`${classes.open_link} ${classes[props.mode]}`}
          src={redirectIcon}
        />
      </a>
      <div className={`${classes.title} ${classes[props.mode]}`}>
        {props.title}
      </div>
      <div className={`${classes.description} ${classes[props.mode]}`}>
        {props.description}
      </div>
      {props.chips && (
        <div className={classes.chips_container}>
          {props.chips.map((chip) => (
            <ChipComponent
              key={chip}
              text={chip}
              color={props.mode === "dark" ? "#242424" : "#24242440"}
              mode={props.mode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardComponent;
