const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
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
  releaseDate: {
    type: Date,
    require: [true, "A movie data must have the release date"],
  },
  releaseYear: {
    type: Date,
    require: [true, "A movie data must have the release year"],
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
  keywords: [String],
  countriesOfOrigin: [String],
  languages: [String],
  cast: [String],
  director: [String],
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
  trailerUrl: {
    type: String,
    trim: true,
    require: [true, "A movie data must have its trailerUrl"],
  },
  trailerYouTubeId: String,
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
  imdbCustomPopularity: {
    type: Number,
    default: 0,
  },
  relevancyScore: {
    type: Number,
    default: 0,
  },
  foreign: Boolean,
  searchL: {
    type: String,
    trim: true,
    require: [true, "A movie data must have its searchL"],
  },
});

module.exports = mongoose.model("movie", movieSchema);
