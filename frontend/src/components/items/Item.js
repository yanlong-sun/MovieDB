import classes from "./Item.module.css";
import Card from "../ui/Card";
import { ReactComponent as Star } from "../../img/icons/star.svg";
import { ReactComponent as Bookmark } from "../../img/icons/bookmark.svg";
import { ReactComponent as Unbookmark } from "../../img/icons/bookmark-outline.svg";
import { ReactComponent as Delete } from "../../img/icons/close-circle.svg";
import FavoritesContext from "../../store/FavoritesContext";
import { useContext } from "react";

function Item(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const isFavorites = favoriteCtx.isMovieFavorites(props.titleId);
  function toggleIsFavoritesHandler() {
    if (isFavorites) {
      // unbookmark
      favoriteCtx.removeFavorites(props.titleId);
    } else {
      favoriteCtx.addFavorites({
        key: props.titleId,
        isDisplayBookmark: props.isDisplayBookmark,
        titleId: props.titleId,
        title: props.title,
        isAdult: props.isAdult,
        startYear: props.startYear,
        runtimeMinutes: props.runtimeMinutes,
        genres: props.genres,
        imageUrl: props.imageUrl,
        rating: props.rating,
      });
    }
  }

  let operationIcon;
  if (props.isDisplayBookmark === "true") {
    const content = favoriteCtx.isMovieFavorites(props.titleId) ? (
      <Bookmark
        className={classes.bookMark}
        onClick={toggleIsFavoritesHandler}
      />
    ) : (
      <Unbookmark
        className={classes.bookMark}
        onClick={toggleIsFavoritesHandler}
      />
    );
    operationIcon = <button className={classes.operationBtn}>{content}</button>;
  } else {
    operationIcon = (
      <button className={classes.deleteBtn}>
        <Delete className={classes.delete} onClick={toggleIsFavoritesHandler} />
      </button>
    );
  }
  return (
    <Card>
      {operationIcon}
      <div className={classes.imageContainer}>
        <img className={classes.image} src={props.imageUrl} alt={props.title} />
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.info}>
        <div className={classes.startYear}>{props.startYear}</div>
        <div className={classes.duration}>{props.runtimeMinutes} mins</div>
        <div className={classes.ratings}>
          <Star className={classes.star} />
          <span>{props.rating}</span>
        </div>
      </div>
    </Card>
  );
}

export default Item;
