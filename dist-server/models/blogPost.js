"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

// Schema
var BlogPostSchema = new _mongoose.Schema({
  title: String,
  body: String,
  date: {
    type: String,
    "default": Date.now()
  }
}); // Model

var BlogPost = (0, _mongoose.model)("BlogPost", BlogPostSchema);
var _default = BlogPost;
exports["default"] = _default;