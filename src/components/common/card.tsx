import ChipComponent from "./chip";
import redirectIcon from "../../assets/icon_redirect.png";
import classes from "../../styles/componentStyles/common/card.module.css";

export type CardDetailstype = {
  title: string;
  description?: string;
  link?: string;
  chips?: string[];
};

const CardComponent = (props: CardDetailstype) => {
  return (
    <div key={props.title} className={classes.box}>
      <a href={props.link} target="_blank">
        <img className={classes.open_link} src={redirectIcon} />
      </a>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.description}>{props.description}</div>
      {props.chips && (
        <div className={classes.chips_container}>
          {props.chips.map((chip) => (
            <ChipComponent key={chip} text={chip} color="#242424" />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardComponent;
