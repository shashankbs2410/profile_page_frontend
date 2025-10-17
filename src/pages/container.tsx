import { Outlet } from "react-router-dom";
import classes from "../App.module.css";
import Navigator from "../components/navigationComponents/navigator";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import bg1 from "../assets/bg_1.svg";
import bg2 from "../assets/bg_2.svg";
import bg3 from "../assets/bg_3.svg";
import bg1Light from "../assets/bg_1_light.svg";
import bg2Light from "../assets/bg_2_light.svg";
import bg3Light from "../assets/bg_3_light.svg";
import React from "react";

const Container = () => {
  const { mode } = useSelector((state: RootState) => state.container);

  return (
    <div className={`${classes.app} ${classes[mode]}`}>
      <Navigator />
      <img
        src={mode === "light" ? bg1Light : bg1}
        className={classes.background1}
      />
      <img
        src={mode === "light" ? bg2Light : bg2}
        className={classes.background2}
      />
      <img
        src={mode === "light" ? bg3Light : bg3}
        className={classes.background3}
      />
      <Outlet />
    </div>
  );
};

export default React.memo(Container);
