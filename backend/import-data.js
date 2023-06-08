const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = require("dotenv");

const Movie = require(`${__dirname}/models/movieModel`);

dotenv.config({ path: `${__dirname}/config.env` });

const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅Moive DB connetion successful✅"));

const importData = async () => {
  let batchNum = 0;
  let totalBatch = 24;
  let totalMovie = 0;
  for (batchNum = 0; batchNum < totalBatch; batchNum++) {
    try {
      const data = JSON.parse(
        fs.readFileSync(`../data/movies-${batchNum}.json`),
        "utf-8"
      );
      totalMovie += data.length;
      await Movie.create(data);
      console.log(`✅ ${batchNum + 1}/${totalBatch}: data.length imported`);
    } catch (err) {
      console.log("❌❌❌❌❌Error❌❌❌❌❌\n", err);
    }
  }
  console.log(`Total: ${totalMovie}`);
  process.exit();
};

const deleteData = async () => {
  try {
    await Movie.deleteMany();
    console.log("✅ Movie collection has been cleaned");
    process.exit();
  } catch (err) {
    console.log("❌❌❌❌❌Error❌❌❌❌❌\n", err);
  }
};

const command = process.argv[2];

if (command === "--import") {
  importData();
} else if (command === "--delete") {
  deleteData();
} else {
  console.error("Invalid Command");
  process.exit();
}
