import ScrollCards from "../ui/ScrollCards";
import ItemList from "../items/ItemList";
import { useEffect, useState } from "react";

function BrowseMovieList() {
  const header = "Trending";
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const resourceURL = "http://localhost:8000/api/v1/movies?page=100&limit=20";
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
      <ScrollCards>
        {header}
        <div>
          <h2> Loading...</h2>
        </div>
      </ScrollCards>
    );
  }
  return (
    <ScrollCards>
      {header}
      <ItemList data={loadedMovies} isDisplayBookmark="true" />
    </ScrollCards>
  );
}
export default BrowseMovieList;
