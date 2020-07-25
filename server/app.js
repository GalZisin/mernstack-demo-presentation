import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import path from "path";
import routes from "./routes/api";
//// import dotenv from "dotenv";
// const dotenv = require("dotenv");

// dotenv.config({ path: "./config.env" });

// import cors from "cors";
const app = express();

// Step 2
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern_youtube",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(cors());

// HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);

export default app;
