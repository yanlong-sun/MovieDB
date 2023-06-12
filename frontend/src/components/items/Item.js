import classes from "./Item.module.css";
import Card from "../ui/Card";
import { ReactComponent as Bookmark } from "../../img/icons/bookmark.svg";
import { ReactComponent as Unbookmark } from "../../img/icons/bookmark-outline.svg";
import { ReactComponent as Delete } from "../../img/icons/close-circle.svg";
import { ReactComponent as IMDB } from "../../img/logos/IMDB.svg";
import { ReactComponent as TMDB } from "../../img/logos/TMDB.svg";
import { ReactComponent as Star } from "../../img/icons/star.svg";

import FavoritesContext from "../../store/FavoritesContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Item(props) {
  const data = props.data;
  const navigate = useNavigate();
  function queryHandler() {
    navigate(`/movie?id=${data.id}`);
  }
  // the option for bookmark or delete
  const favoriteCtx = useContext(FavoritesContext);
  const isFavorites = favoriteCtx.isMovieFavorites(data.id);
  function toggleIsFavoritesHandler() {
    if (isFavorites) {
      // unbookmark
      favoriteCtx.removeFavorites(data.id);
    } else {
      favoriteCtx.addFavorites(data);
    }
  }

  let operationIcon;
  if (props.operationOption === "bookmark") {
    const content = favoriteCtx.isMovieFavorites(data.id) ? (
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
  } else if (props.operationOption === "delete") {
    operationIcon = (
      <button className={classes.deleteBtn}>
        <Delete className={classes.delete} onClick={toggleIsFavoritesHandler} />
      </button>
    );
  }

  let content;
  if (props.moreDetail === true) {
    content = (
      <div onClick={queryHandler}>
        <div className={classes.imageContainerBigger}>
          {operationIcon}
          <img
            className={classes.imageBigger}
            src={data.posterUrl}
            alt={data.title}
            width={data.posterWidth}
            height={data.posterHeight}
          />
        </div>
      </div>
    );
  } else {
    content = (
      <div onClick={queryHandler}>
        <div className={classes.imageContainer}>
          {operationIcon}
          <img
            className={classes.image}
            src={data.posterUrl}
            alt={data.title}
            width={data.posterWidth}
            height={data.posterHeight}
          />
        </div>
        <div className={classes.title}>{data.title}</div>
        <div className={classes.info}>
          <IMDB className={classes.logos} />
          {data.imdbRating}
          <Star className={classes.star} />({data.imdbVotes})
        </div>
        <div className={classes.info}>
          <TMDB className={classes.logos} />
          {data.tmdbRating}
          <Star className={classes.star} />({data.tmdbVotes})
        </div>
      </div>
    );
  }
  return <Card>{content}</Card>;
}

export default Item;
