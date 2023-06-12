import NewItem from "./NewItem";

function NewItemList(props) {
  const movies = props.data;
  const contentList = movies.map((movie) => (
    <NewItem data={movie} key={movie.id} />
  ));
  return contentList;
}
export default NewItemList;
