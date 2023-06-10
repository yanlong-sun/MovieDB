import Item from "./Item";

function ItemList(props) {
  return props.data.map((item) => (
    <Item
      key={item.id}
      isDisplayBookmark={props.isDisplayBookmark}
      // IDs
      id={item.id}
      tmdbId={item.itmdbIdd}
      imdbId={item.imdbId}
      // General info
      title={item.title}
      originalTitle={item.originalTitle}
      language={item.language}
      releaseYear={item.releaseYear}
      releaseDate={item.releaseDate}
      genres={item.genres}
      plot={item.plot}
      runtime={item.runtime}
      adult={item.adult}
      budget={item.budget}
      revenue={item.revenue}
      homepage={item.homepage}
      status={item.status}
      mpaaRating={item.mpaaRating}
      keywords={item.keywords}
      countriesOfOrigin={item.countriesOfOrigin}
      languages={item.languages}
      cast={item.cast}
      director={item.director}
      production={item.production}
      awardsSummary={item.awardsSummary}
      provider={item.provider}
      // Images
      posterUrl={item.posterUrl}
      posterWidth={item.posterWidth}
      posterHeight={item.posterHeight}
      backdropUrl={item.backdropUrl}
      backdropWidth={item.backdropWidth}
      backdropHeight={item.backdropHeight}
      // video
      trailerUrl={item.trailerUrl}
      trailerYouTubeId={item.trailerYouTubeId}
      // tmdb
      tmdbPopularity={item.tmdbPopularity}
      tmdbRating={item.tmdbRating}
      tmdbVotes={item.tmdbVotes}
      // imdb
      imdbCustomPopularity={item.imdbCustomPopularity}
      imdbRating={item.imdbRating}
      imdbVotes={item.imdbVotes}
      // letterboxd
      letterboxdScore={item.letterboxdScore}
      letterboxdVotes={item.letterboxdVotes}
      // custom
      searchL={item.searchL}
    />
  ));
}

export default ItemList;
