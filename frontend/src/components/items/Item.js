import classes from "./Item.module.css";
import Card from "../ui/Card";
import { ReactComponent as Bookmark } from "../../img/icons/bookmark.svg";
import { ReactComponent as Unbookmark } from "../../img/icons/bookmark-outline.svg";
import { ReactComponent as Delete } from "../../img/icons/close-circle.svg";
import { ReactComponent as IMDB } from "../../img/logos/IMDB.svg";
import { ReactComponent as TMDB } from "../../img/logos/TMDB.svg";
import FavoritesContext from "../../store/FavoritesContext";
import { useContext } from "react";

function Item(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const isFavorites = favoriteCtx.isMovieFavorites(props.id);
  function toggleIsFavoritesHandler() {
    if (isFavorites) {
      // unbookmark
      favoriteCtx.removeFavorites(props.id);
    } else {
      favoriteCtx.addFavorites(props);
    }
  }

  let operationIcon;
  if (props.isDisplayBookmark === "true") {
    const content = favoriteCtx.isMovieFavorites(props.id) ? (
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
        <img
          className={classes.image}
          src={props.posterUrl}
          alt={props.title}
          width={props.posterWidth}
          height={props.posterHeight}
        />
      </div>
      <div className={classes.info}>
        <div className={classes.ratings}>
          <IMDB className={classes.logos} />
          <span>{~~props.imdbRating * 10}%</span>
        </div>
        <div className={classes.ratings}>
          <TMDB className={classes.logos} />
          <span>{~~props.tmdbRating * 10}%</span>
        </div>
      </div>
      <div className={classes.title}>{props.title}</div>
    </Card>
  );
}

export default Item;
