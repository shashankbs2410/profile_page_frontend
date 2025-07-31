import { Outlet } from "react-router-dom";
import classes from "../App.module.css";
import Navigator from "../components/navigationComponents/navigator";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import bg1 from "../assets/bg_1.svg";
import bg2 from "../assets/bg_2.svg";
import bg3 from "../assets/bg_3.svg";

const Container = () => {
  const { mode } = useSelector((state: RootState) => state.container);

  return (
    <div className={`${classes.app} ${classes[mode]}`}>
      <Navigator />
      <img src={bg1} className={classes.background1} />
      <img src={bg2} className={classes.background2} />
      <img src={bg3} className={classes.background3} />
      <Outlet />
    </div>
  );
};

export default Container;
