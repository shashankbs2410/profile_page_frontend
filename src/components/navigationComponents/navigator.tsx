import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pages } from "./navigatorConstants";
import classes from "./navigator.module.css";
import moon from "../../assets/icon_moon_black.png";
import sun from "../../assets/icon_sun_white.png";
import { setMode } from "../../store/slices/containerSlice";
import { AppDispatch, RootState } from "../../store";

const Navigator = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { mode, pageName } = useSelector((state: RootState) => state.container);

  return (
    <header className={classes.header_container}>
      <div className={classes.header_buffer}></div>
      <div className={classes.page_title_container}>
        {pages.map((page) => (
          <Link key={page.page} to={page.path} className={classes.page_title}>
            <span
              className={`${classes.page_name} ${
                page.page === pageName && classes.selected_page
              }`}
            >
              {page.page}
            </span>
          </Link>
        ))}
      </div>
      <div
        className={`${classes.theme_button_container} ${classes[mode]}`}
        title="change theme"
        onClick={() => {
          dispatch(mode === "dark" ? setMode("light") : setMode("dark"));
        }}
      >
        <img
          src={moon}
          className={`${classes.theme_icon_moon} ${classes[mode]}`}
        />
        <img
          src={sun}
          className={`${classes.theme_icon_sun} ${classes[mode]}`}
        />
      </div>
    </header>
  );
};

export default Navigator;
