import classes from "./MainNavigation.module.css";
import { ReactComponent as Logo } from "../../img/icons/film.svg";
import { ReactComponent as Bookmarks } from "../../img/icons/bookmarks.svg";
import { ReactComponent as Browse } from "../../img/icons/compass.svg";
import { ReactComponent as Ribbon } from "../../img/icons/ribbon.svg";
import DarkModeSwitch from "../other/DarkModeSwitch";
import { Link } from "react-router-dom";

// import { ReactComponent as Search } from "../../img/icons/search-outline.svg";
// import { ReactComponent as Options } from "../../img/icons/options-outline.svg";

function MainNavigation(props) {
  return (
    <div className={classes.navbar}>
      <div className={classes.logoContainer}>
        <Logo className={classes.logo} />
        <span className={classes.logoName}>MovieDB</span>
      </div>
      {/* <div className={classes.serachCombo}> */}
      {/* <div className={classes.searchbox}>
          <input className={classes.inputArea} placeholder="Search" />
          <div className={classes.searchIconContainer}>
            <Search className={classes.searchIcon} />
          </div>
        </div>
        <button className={classes.option}>
          <Options className={classes.optionBtn} />
        </button> */}
      {/* </div> */}
      <div className={classes.menuContainer}>
        <ul className={classes.menu}>
          <li>
            <Link to="/" className={classes.option}>
              <Browse className={classes.optionIcon} />
              <span className={classes.optionName}>Browse</span>
            </Link>
          </li>
          <li>
            <Link to="/" className={classes.option}>
              <Ribbon className={classes.optionIcon} />
              <span className={classes.optionName}>Top Rate</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={classes.option}>
              <Bookmarks className={classes.optionIcon} />
              <span className={classes.optionName}>Bookmarks</span>
            </Link>
          </li>
          <li>
            <DarkModeSwitch
              handler={props.handler}
              className={classes.darkswitch}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNavigation;
