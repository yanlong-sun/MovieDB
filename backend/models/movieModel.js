const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  // IDs
  id: {
    type: Number,
    require: [true, "A movie data must have the id"],
  },
  tmdbId: {
    type: Number,
    require: [true, "A movie data must have the tmdbId"],
  },
  imdbId: {
    type: String,
    require: [true, "A movie data must have the imdbId"],
  },
  // General info
  title: {
    type: String,
    trim: true,
    require: [true, "A movie data must have the title"],
  },
  originalTitle: {
    type: String,
    trim: true,
    require: [true, "A movie data must have the original title"],
  },
  language: {
    type: String,
    trim: true,
    require: [true, "A movie data must have the language type"],
  },
  releaseYear: {
    type: Date,
    require: [true, "A movie data must have the release year"],
  },
  releaseDate: {
    type: Date,
    require: [true, "A movie data must have the release date"],
  },
  genres: [String],
  plot: {
    type: String,
    trim: true,
    require: [true, "A movie data must have the plot"],
  },
  runtime: {
    type: Number,
    require: [true, "A movie data must have the runtime"],
  },
  adult: {
    type: Boolean,
    require: [true, "A movie data must have adult attribute"],
  },
  budget: {
    type: Number,
    require: [true, "A movie data must have the budget"],
  },
  revenue: {
    type: Number,
    require: [true, "A movie data must have the budrevenueget"],
  },
  homepage: {
    type: String,
    trim: true,
    require: [true, "A movie data must have its homepage"],
  },
  status: {
    type: String,
    trim: true,
    require: [true, "A movie data must have its status"],
  },
  mpaaRating: String,
  keywords: [String],
  countriesOfOrigin: [String],
  languages: [String],
  cast: [String],
  director: [String],
  production: String,
  awardsSummary: String,
  provider: [
    {
      ID: Number,
      Country: String,
      Provider: String,
      imdbID: String,
      DateAvailable: String,
      Link: String,
      tmbdID: Number,
      isSA: Boolean,
      isTV: Boolean,
      newRefresh: Boolean,
    },
  ],

  // Images
  posterUrl: {
    type: String,
    trim: true,
    require: [true, "A movie data must have its posterUrl"],
  },
  posterWidth: Number,
  posterHeight: Number,
  backdropUrl: {
    type: String,
    trim: true,
    require: [true, "A movie data must have its backdropUrl"],
  },
  backdropWidth: Number,
  backdropHeight: Number,

  // video
  trailerUrl: {
    type: String,
    trim: true,
    require: [true, "A movie data must have its trailerUrl"],
  },
  trailerYouTubeId: String,

  // tmdb
  tmdbPopularity: {
    type: Number,
    require: [true, "A movie data must have its tmdbPopularity"],
  },
  tmdbRating: {
    type: Number,
    require: [true, "A movie data must have its tmdbRating"],
  },
  tmdbVotes: {
    type: Number,
    require: [true, "A movie data must have its tmdbVotes"],
  },

  // imdb
  imdbCustomPopularity: {
    type: Number,
    default: 0,
  },

  // custom
  relevancyScore: {
    type: Number,
    default: 0,
  },
  searchL: String,
});

module.exports = mongoose.model("movie", movieSchema);
