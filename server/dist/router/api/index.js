"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./user/index.js"));

var _index2 = _interopRequireDefault(require("./quiz/index.js"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use("/user", _index.default);
router.use("/quiz", _index2.default);
var _default = router;
exports.default = _default;