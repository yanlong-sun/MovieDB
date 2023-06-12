import classes from "./AutoScroll.module.css";
import { ReactComponent as Back } from "../../img/icons/back.svg";
import { ReactComponent as Forward } from "../../img/icons/forward.svg";
import { ReactComponent as Logo } from "../../img/icons/film.svg";
import { useRef, useState } from "react";

function AutoScroll(props) {
  const poster = useRef(null);
  const [posterCnt, setPosterCnt] = useState(0);
  const [dotActive, setDotActive] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const forwardClickHandler = () => {
    const posterWidth = poster.current.offsetWidth;
    const state = Array(5).fill(false);
    if (posterCnt === 4) {
      setPosterCnt(0);
      state[0] = true;
      setDotActive(state);
      poster.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      setPosterCnt(posterCnt + 1);
      state[posterCnt + 1] = true;
      setDotActive(state);
      poster.current.scrollTo({
        left: posterWidth * (posterCnt + 1),
        behavior: "smooth",
      });
    }
  };

  const backClickHandler = () => {
    const posterWidth = poster.current.offsetWidth;
    const state = Array(5).fill(false);
    if (posterCnt === 0) {
      setPosterCnt(4);
      state[4] = true;
      setDotActive(state);
      poster.current.scrollTo({ left: posterWidth * 4, behavior: "smooth" });
    } else {
      setPosterCnt(posterCnt - 1);
      state[posterCnt - 1] = true;
      setDotActive(state);
      poster.current.scrollTo({
        left: posterWidth * (posterCnt - 1),
        behavior: "smooth",
      });
    }
  };

  const dotClickHandler = (e) => {
    const posterWidth = poster.current.offsetWidth;
    const state = Array(5).fill(false);
    const clickedDotIndex = Array.from(e.currentTarget.children).indexOf(
      e.target.closest("svg")
    );
    state[clickedDotIndex] = true;
    setDotActive(state);
    poster.current.scrollTo({
      left: posterWidth * clickedDotIndex,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>{props.children[0]}</h2>
      <main className={classes.bar} ref={poster}>
        {props.children[1]}
      </main>
      <button className={classes.btnContainerLeft}>
        <Back className={classes.btnLeft} onClick={backClickHandler} />
      </button>
      <button className={classes.btnContainerRight}>
        <Forward className={classes.btnRight} onClick={forwardClickHandler} />
      </button>
      <div className={classes.dots} onClick={dotClickHandler}>
        <Logo className={dotActive[0] ? classes.activeDot : classes.dot} />
        <Logo className={dotActive[1] ? classes.activeDot : classes.dot} />
        <Logo className={dotActive[2] ? classes.activeDot : classes.dot} />
        <Logo className={dotActive[3] ? classes.activeDot : classes.dot} />
        <Logo className={dotActive[4] ? classes.activeDot : classes.dot} />
      </div>
    </div>
  );
}

export default AutoScroll;
