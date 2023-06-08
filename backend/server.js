const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require(`${__dirname}/app`);

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

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
