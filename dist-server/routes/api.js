"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _blogPost = _interopRequireDefault(require("../models/blogPost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); // Routes

router.get("/", function (req, res) {
  _blogPost["default"].find({}).then(function (data) {
    console.log("Data: ", data);
    res.json(data);
  })["catch"](function (error) {
    console.log("error: ", error);
  });
});
router.post("/save", function (req, res) {
  var data = req.body;
  var newBlogPost = new _blogPost["default"](data);
  newBlogPost.save(function (error) {
    if (error) {
      res.status(500).json({
        msg: "Sorry, internal server errors"
      });
      return;
    } // BlogPost


    return res.json({
      msg: "Your data has been saved!!!!!!"
    });
  });
});
router.get("/name", function (req, res) {
  var data = {
    username: "peterson",
    age: 5
  };
  res.json(data);
});
var _default = router;
exports["default"] = _default;