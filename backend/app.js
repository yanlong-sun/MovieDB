const { config } = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const movieRouters = require(`${__dirname}/routers/moviesRoutes`);

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use("/api/v1/movies", movieRouters);

module.exports = app;
