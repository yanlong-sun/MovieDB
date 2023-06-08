import ScrollCards from "../ui/ScrollCards";
import ItemList from "../items/ItemList";

function BrowseMovieList() {
  const dummyData = [
    {
      titleId: 0,
      title: "John Wick: Chapter 3 - Parabellum",
      isAdult: "true",
      startYear: "2011",
      runtimeMinutes: "120",
      genres: "Action",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg",
      rating: "3",
    },
    {
      titleId: 1,
      title: "John Wick: Chapter 3 - Parabellum",
      isAdult: "true",
      startYear: "2013",
      runtimeMinutes: "120",
      genres: "Action",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg",
      rating: "3",
    },
    {
      titleId: 2,
      title: "John Wick: Chapter 3 - Parabellum",
      isAdult: "true",
      startYear: "2020",
      runtimeMinutes: "120",
      genres: "Action",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg",
      rating: "3",
    },

    {
      titleId: 3,
      title: "John Wick: Chapter 3 - Parabellum",
      isAdult: "true",
      startYear: "2021",
      runtimeMinutes: "120",
      genres: "Action",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg",
      rating: "3",
    },
    {
      titleId: 4,
      title: "John Wick: Chapter 3 - Parabellum",
      isAdult: "true",
      startYear: "2022",
      runtimeMinutes: "120",
      genres: "Action",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg",
      rating: "3",
    },
    {
      titleId: 5,
      title: "John Wick: Chapter 3 - Parabellum",
      isAdult: "true",
      startYear: "2023",
      runtimeMinutes: "120",
      genres: "Action",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg",
      rating: "3",
    },
    {
      titleId: 6,
      title: "John Wick: Chapter 3 - Parabellum",
      isAdult: "true",
      startYear: "2024",
      runtimeMinutes: "120",
      genres: "Action",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg",
      rating: "3",
    },
    {
      titleId: 7,
      title: "John Wick: Chapter 3 - Parabellum",
      isAdult: "true",
      startYear: "2025",
      runtimeMinutes: "120",
      genres: "Action",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg",
      rating: "3",
    },
    {
      titleId: 8,
      title: "John Wick: Chapter 3 - Parabellum",
      isAdult: "true",
      startYear: "2026",
      runtimeMinutes: "120",
      genres: "Action",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg",
      rating: "3",
    },
    {
      titleId: 9,
      title: "John Wick: Chapter 3 - Parabellum",
      isAdult: "true",
      startYear: "2027",
      runtimeMinutes: "120",
      genres: "Action",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg",
      rating: "3",
    },
    {
      titleId: 10,
      title: "John Wick: Chapter 3 - Parabellum",
      isAdult: "true",
      startYear: "2028",
      runtimeMinutes: "120",
      genres: "Action",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/NYC_wideangle_south_from_Top_of_the_Rock.jpg",
      rating: "3",
    },
  ];
  return (
    <ScrollCards>
      <ItemList data={dummyData} isDisplayBookmark="true" />
    </ScrollCards>
  );
}
export default BrowseMovieList;
