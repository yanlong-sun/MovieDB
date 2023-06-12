import classes from "./BrowseAll.module.css";
import NewList from "./NewList";
import TrendingList from "./TrendingList";

function BrowseAll() {
  return (
    <div className={classes.categoryList}>
      <NewList />
      <TrendingList />
    </div>
  );
}

export default BrowseAll;
