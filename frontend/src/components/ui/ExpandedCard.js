import classes from "./ExpandedCard.module.css";

function ExpandedCard(props) {
  return <main className={classes.expandedContainer}>{props.children}</main>;
}

export default ExpandedCard;
