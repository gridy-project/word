"use strict";

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.listen(5500, () => console.log("Run Server..."));