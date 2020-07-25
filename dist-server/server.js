"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 8080; // Step 1

_app["default"].listen(PORT, console.log("Server is starting at ".concat(PORT)));