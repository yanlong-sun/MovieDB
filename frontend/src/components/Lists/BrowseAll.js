import classes from "./BrowseAll.module.css";
import BrowseMovieList from "./BrowseMovieList";

function BrowseAll() {
  return (
    <div className={classes.categoryList}>
      <BrowseMovieList />
    </div>
  );
}

export default BrowseAll;
