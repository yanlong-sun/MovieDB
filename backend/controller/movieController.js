const Movie = require("../models/movieModel");
const APIFeatures = require("../utils/apiFeatures");

// GET ALL
exports.getAllMovies = async (req, res) => {
  try {
    const features = new APIFeatures(Movie.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .pagination();

    const movies = await Movie.find(features.query);
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      length: movies.length,
      data: {
        movies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: `❌❌❌❌❌ERROR❌❌❌❌❌: ${err}`,
    });
  }
};

// GET ONE
exports.getMovie = async (req, res) => {
  try {
    const movieData = await Movie.findById(req.params.id);
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      data: {
        movieData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: `❌❌❌❌❌ERROR❌❌❌❌❌ \n${err}`,
    });
  }
};

// POST
exports.createMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        movie: newMovie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: `❌❌❌❌❌ERROR❌❌❌❌❌ \n${err}`,
    });
  }
};

// Update
exports.updateMovie = async (req, res) => {
  try {
    const newMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        movie: newMovie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: `❌❌❌❌❌ERROR❌❌❌❌❌ \n${err}`,
    });
  }
};

// Delete
exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: `❌❌❌❌❌ERROR❌❌❌❌❌ \n${err}`,
    });
  }
};
