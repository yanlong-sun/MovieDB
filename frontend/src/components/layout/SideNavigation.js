import classes from "./SideNavigation.module.css";
import { ReactComponent as Logo } from "../../img/icons/film.svg";
import { ReactComponent as Bookmarks } from "../../img/icons/bookmarks.svg";
import { ReactComponent as Browse } from "../../img/icons/compass.svg";
import { ReactComponent as Ribbon } from "../../img/icons/ribbon.svg";
import { Link } from "react-router-dom";

function SideNavigation() {
  return (
    <div className={classes.sideBar}>
      <div className={classes.logoContainer}>
        <Logo className={classes.logo} />
        <span className={classes.logoName}>MovieDB</span>
      </div>
      <div className={classes.menuContainer}>
        <h3 className={classes.sectionName}>Menu</h3>
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
        </ul>
      </div>
      <div className={classes.libraryContainer}>
        <h3 className={classes.sectionName}>Library</h3>
        <ul className={classes.library}>
          <li>
            <Link to="/favorites" className={classes.option}>
              <Bookmarks className={classes.optionIcon} />
              <span className={classes.optionName}>Movies</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={classes.option}>
              <Bookmarks className={classes.optionIcon} />
              <span className={classes.optionName}>Series</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavigation;
