import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pages } from "./navigatorConstants";
import { setMode } from "../../store/slices/containerSlice";
import { AppDispatch, RootState } from "../../store";
import classes from "../../styles/componentStyles/navigationComponents/navigator.module.css";
import moon from "../../assets/icon_moon_black.png";
import sun from "../../assets/icon_sun_white.png";
import menuIcon from "../../assets/icon_menu.png";
import closeIcon from "../../assets/icon_close.png";
import { useState } from "react";

const Navigator = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [menuOpen, setMenuOpen] = useState(false);

  const { mode, pageName, screenWidth } = useSelector(
    (state: RootState) => state.container
  );

  return (
    <header
      className={classes.header_container}
      style={
        menuOpen
          ? { backgroundColor: mode === "dark" ? "#000000" : "#FFFFFF" }
          : undefined
      }
    >
      <div className={classes.header_menu}>
        {screenWidth < 768 && (
          <button
            className={classes.menu_button}
            onClick={() => {
              if (menuOpen) {
                const element = document.getElementById("nav_list");
                element?.classList.add(classes.exit);
                setTimeout(() => {
                  element?.classList.remove(classes.exit);
                  setMenuOpen(false);
                }, 500);
              } else {
                setMenuOpen(true);
              }
            }}
          >
            <img
              src={menuOpen ? closeIcon : menuIcon}
              className={`${classes.menu_icon} ${classes[mode]}`}
            />
          </button>
        )}
      </div>
      {(screenWidth > 768 || menuOpen) && (
        <div
          id="nav_list"
          className={`${classes.page_title_container} ${classes[mode]}`}
        >
          {pages.map((page) => (
            <Link
              key={page.page}
              to={page.path}
              className={classes.page_title}
              onClick={() => {
                const element = document.getElementById("nav_list");
                element?.classList.add(classes.exit);
                setTimeout(() => {
                  element?.classList.remove(classes.exit);
                  setMenuOpen(false);
                }, 500);
              }}
            >
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
      )}
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
