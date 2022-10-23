"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = require("../../../controller/db/user.js");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/member", (req, res) => {
  (0, _user.getUser)();
  res.json({
    code: 1
  });
});
var _default = router;
exports.default = _default;