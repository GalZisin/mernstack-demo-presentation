"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _api = _interopRequireDefault(require("./routes/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//// import dotenv from "dotenv";
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });
// import cors from "cors";
var app = (0, _express["default"])(); // Step 2

_mongoose["default"].connect(process.env.MONGODB_URI || "mongodb://localhost/mern_youtube", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

_mongoose["default"].connection.on("connected", function () {
  console.log("Mongoose is connected!!!!");
}); // Data parsing


app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); // Step 3

if (process.env.NODE_ENV === "production") {
  app.use(_express["default"]["static"]("client/build"));
} // app.use(cors());
// HTTP request logger


app.use((0, _morgan["default"])("tiny"));
app.use("/api", _api["default"]);
var _default = app;
exports["default"] = _default;