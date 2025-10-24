import { useState } from "react";
import leftArrow from "../../assets/icon_left_arrow.png";
import rightArrow from "../../assets/icon_right_arrow.png";
import classes from "../../styles/componentStyles/common/paginationWrapper.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const PaginationComponent = (props: {
  data: { title: string; [key: string]: any }[];
  itemcount: number;
  mapComponent: Function;
}) => {
  const { mode } = useSelector((state: RootState) => state.container);
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div className={`${classes.list_box} ${classes[mode]}`}>
      <div className={classes.items_container}>
        <div className={classes.buffer}>
          {props.data.length > 0 && selectedPage !== 1 && (
            <img
              src={leftArrow}
              className={classes.arrow}
              onClick={() => setSelectedPage(selectedPage - 1)}
            />
          )}
        </div>
        <div className={classes.content_box}>
          {props.data.length > 0 &&
            props.data
              .slice(
                (selectedPage - 1) * props.itemcount,
                selectedPage * props.itemcount
              )
              .map((project) => props.mapComponent({...project, mode: mode}))}
        </div>
        <div className={classes.buffer}>
          {props.data.length > 0 &&
            selectedPage !== Math.ceil(props.data.length / props.itemcount) && (
              <img
                src={rightArrow}
                className={classes.arrow}
                onClick={() => setSelectedPage(selectedPage + 1)}
              />
            )}
        </div>
      </div>
      <div className={classes.page_dots}>
        {Array(Math.ceil(props.data.length / props.itemcount))
          .fill(null)
          .map((_, index) => (
            <div
              key={`page-${index}`}
              className={`${classes.page_dot} ${
                selectedPage === index + 1 ? classes.selected : undefined
              } ${classes[mode]}`}
            />
          ))}
      </div>
    </div>
  );
};

export default PaginationComponent;
