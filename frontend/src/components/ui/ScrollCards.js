import classes from "./ScrollCard.module.css";

function ScrollCards(props) {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>{props.children[0]}</h2>
      <main className={classes.bar}>{props.children[1]}</main>
    </div>
  );
}

export default ScrollCards;
