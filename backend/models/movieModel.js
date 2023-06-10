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
  },
  language: {
    type: String,
    trim: true,
  },
  releaseYear: {
    type: Date,
  },
  releaseDate: {
    type: Date,
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
  budget: Number,
  revenue: Number,
  homepage: String,
  status: String,
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
    default: 0,
  },
  tmdbRating: {
    type: Number,
    require: [true, "A movie data must have its tmdbRating"],
    default: 0,
  },
  tmdbVotes: {
    type: Number,
    require: [true, "A movie data must have its tmdbVotes"],
    default: 0,
  },

  // imdb
  imdbCustomPopularity: {
    type: Number,
    default: 0,
  },
  imdbRating: { type: Number, default: 0 },
  imdbVotes: { type: Number, default: 0 },

  // letterboxd
  letterboxdScore: { type: Number, default: 0 },
  letterboxdVotes: { type: Number, default: 0 },
  // custom
  searchL: String,
});

module.exports = mongoose.model("movie", movieSchema);
