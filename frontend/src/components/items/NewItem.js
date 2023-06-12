import Item from "./Item";
import classes from "./NewItem.module.css";
import { ReactComponent as IMDB } from "../../img/logos/IMDB.svg";
import { ReactComponent as TMDB } from "../../img/logos/TMDB.svg";
import { ReactComponent as Star } from "../../img/icons/star.svg";

function NewItem(props) {
  const movie = props.data;
  const containerBkg = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "110rem",
    height: "30rem",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    backgroundImage: `url(${movie.backdropUrl})`,
    backgroundSize: "cover",
    filter: "grayscale(10%) opacity(50%) blur(4px)",
    zIndex: "2",
  };
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Item data={movie} operationOption="bookmark" moreDetail={true}></Item>
        <div className={classes.info}>
          <div className={classes.headLine}>
            <h1 className={classes.title}>{movie.title}</h1>
            <div className={classes.details}>
              <span>{movie.releaseDate}</span>
              &#x2022;
              <span>{movie.genres.join(", ")}</span>
              &#x2022;
              <span>{movie.runtime}</span>
            </div>
          </div>
          <div className={classes.ratings}>
            <div className={classes.ratingContainer}>
              <IMDB className={classes.logos} />
              <span>
                {movie.imdbRating}
                <Star className={classes.star} />({movie.imdbVotes})
              </span>
            </div>
            <div className={classes.ratingContainer}>
              <TMDB className={classes.logos} />
              <span>
                {movie.tmdbRating}
                <Star className={classes.star} />({movie.tmdbVotes})
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={containerBkg}></div>
    </div>
  );
}

export default NewItem;
