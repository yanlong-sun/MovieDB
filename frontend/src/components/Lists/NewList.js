import NewItemList from "../items/NewItemList";
import { useEffect, useState } from "react";
import AutoScroll from "../ui/AutoScroll";

function TrendingList() {
  const header = "What's New";
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const resourceURL = "http://localhost:8000/api/v1/movies?page=10&limit=5";
  useEffect(() => {
    setIsLoading(true);
    fetch(resourceURL)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        const data = jsonData.data.movies;
        setIsLoading(false);
        setLoadedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <AutoScroll>
        {header}
        <div>
          <h2> Loading... </h2>
        </div>
      </AutoScroll>
    );
  }

  return (
    <AutoScroll>
      {header}
      <NewItemList data={loadedMovies} operationOption="bookmark" />
    </AutoScroll>
  );
}
export default TrendingList;
