import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DetailedItem from "../components/items/DetailedItem";

const DetailPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const movieID = query.get("id");
  const requestUrl = `http://localhost:8000/api/v1/movies?id=${movieID}`;
  const [isLoading, setIsLoading] = useState(false);
  const [loadedContent, setLoadedContent] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(requestUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedContent(data.data.movies[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <DetailedItem data={loadedContent} />;
};

export default DetailPage;
