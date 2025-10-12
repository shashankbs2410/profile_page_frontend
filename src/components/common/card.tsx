import ChipComponent from "./chip";
import redirectIcon from "../../assets/icon_redirect.png";
import classes from "./card.module.css";

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
      <div>{props.title}</div>
      <div>{props.description}</div>
      {props.chips && (
        <div style={{ display: "flex" }}>
          {props.chips.map((chip) => (
            <ChipComponent text={chip} color="#000" />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardComponent;
