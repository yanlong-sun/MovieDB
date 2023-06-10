import classes from "./ScrollCard.module.css";
import { ReactComponent as Back } from "../../img/icons/back.svg";
import { ReactComponent as Forward } from "../../img/icons/forward.svg";
import { useState, useRef } from "react";

function ScrollCards(props) {
  const container = useRef(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  function clickBackHandler() {
    setIsEnd(false);
    const containerNow = container.current;
    if (!containerNow) return;
    const { scrollLeft } = containerNow;
    const newScrollLeft = scrollLeft - 300;
    containerNow.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    if (containerNow.scrollLeft === 0) setIsStart(true);
  }

  function clickForwardHandler() {
    setIsStart(false);
    const containerNow = container.current;
    if (!containerNow) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerNow;
    const maxScrollLeft = scrollWidth - clientWidth;
    const newScrollLeft = scrollLeft + 300;
    if (newScrollLeft >= maxScrollLeft) {
      setIsEnd(true);
    } else {
      containerNow.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  }
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>{props.children[0]}</h2>
      <button
        className={classes.buttonContainerBack}
        onClick={clickBackHandler}
        style={isStart ? { display: "none" } : null}
      >
        <Back className={classes.btnBack} />
      </button>
      <main className={classes.bar} ref={container}>
        {props.children[1]}
      </main>
      <button
        className={classes.buttonContainerForward}
        onClick={clickForwardHandler}
        style={isEnd ? { display: "none" } : null}
      >
        <Forward className={classes.btnForward} />
      </button>
    </div>
  );
}

export default ScrollCards;
