const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const rootRouter = require("./routes/index");

const PORT = process.env.PORT || 3000;

//Essential Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Env files

// require("dotenv").config();

//Estabilishing the mongoose

main().catch((err) => console.log(err));

//Routes

app.get("/", (req, res) => {
  res.send("Hello world");
});

//User Router

app.use("/api/v1", rootRouter);

//Listening on the port

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  // await mongoose.connect("mongodb://seineale:password@0.0.0.0:27017/");
  console.log("db connected");
  app.listen(PORT, (req, res) => {
    console.log(`Server started, listening on port ${PORT}`);
  });
}
