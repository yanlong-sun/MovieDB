import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import DarkModeSwitch from "../other/DarkModeSwitch";

import { ReactComponent as Search } from "../../img/icons/search-outline.svg";
import { ReactComponent as Options } from "../../img/icons/options-outline.svg";

function MainNavigation(props) {
  return (
    <div className={classes.navbar}>
      <div className={classes.serachCombo}>
        <div className={classes.searchbox}>
          <input className={classes.inputArea} placeholder="Search" />
          <div className={classes.searchIconContainer}>
            <Search className={classes.searchIcon} />
          </div>
        </div>
        <button className={classes.option}>
          <Options className={classes.optionBtn} />
        </button>
      </div>
      <DarkModeSwitch handler={props.handler} className={classes.darkswitch} />
    </div>
  );
}

export default MainNavigation;
