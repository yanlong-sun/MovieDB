import classes from "./DarkModeSwitch.module.css";
import { ReactComponent as Sun } from "../../img/icons/sunny.svg";
import { ReactComponent as Moon } from "../../img/icons/moon.svg";

function DarkModeSwitch(props) {
  const isDark = props.handler.isDark;
  const setDark = props.handler.setDark;
  function darkModeHandler() {
    isDark ? setDark(false) : setDark(true);
  }
  return (
    <section>
      <input
        id="switch"
        className={classes.checkbox}
        type="checkbox"
        checked={isDark}
        onChange={darkModeHandler}
      />
      <label htmlFor="switch" className={classes.slider}>
        <Sun className={`${classes.icon} ${isDark ? classes.hide : null}`} />
        <Moon className={`${classes.icon} ${isDark ? null : classes.hide}`} />
      </label>
    </section>
  );
}

export default DarkModeSwitch;
