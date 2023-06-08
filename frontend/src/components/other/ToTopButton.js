import classes from "./ToTopButton.module.css";
import { ReactComponent as Up } from "../../img/icons/chevron-up.svg";

function TotopButton() {
  function clickBtnHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button className={classes.btn} onClick={clickBtnHandler}>
      <Up />
    </button>
  );
}

export default TotopButton;
