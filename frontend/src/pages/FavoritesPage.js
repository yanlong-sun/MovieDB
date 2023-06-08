import { useContext } from "react";
import ExpandedCard from "../components/ui/ExpandedCard";
import FavoritesContext from "../store/FavoritesContext";
import ItemList from "../components/items/ItemList";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <h2>Bookmark your favorite Moives!</h2>;
  } else {
    content = (
      <ExpandedCard>
        <ItemList data={favoriteCtx.favorites} displayBookMark="false" />
      </ExpandedCard>
    );
  }
  return (
    <div>
      <h1>Bookmarks</h1>
      {content}
    </div>
  );
}

export default FavoritesPage;
