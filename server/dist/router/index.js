"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./api/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.use("/api", _index.default);
var _default = router;
exports.default = _default;