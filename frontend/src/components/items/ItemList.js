import Item from "./Item";

function ItemList(props) {
  return props.data.map((item) => {
    return (
      <Item
        key={item.titleId}
        isDisplayBookmark={props.isDisplayBookmark}
        titleId={item.titleId}
        title={item.title}
        isAdult={item.isAdult}
        startYear={item.startYear}
        runtimeMinutes={item.runtimeMinutes}
        genres={item.genres}
        imageUrl={item.imageUrl}
        rating={item.rating}
      />
    );
  });
}

export default ItemList;
