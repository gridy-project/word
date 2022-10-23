"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _signIn = _interopRequireDefault(require("./signIn.js"));

var _signOut = _interopRequireDefault(require("./signOut.js"));

var _signUp = _interopRequireDefault(require("./signUp.js"));

var _member = _interopRequireDefault(require("./member.js"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use("/", _member.default, _signIn.default, _signOut.default, _signUp.default);
var _default = router;
exports.default = _default;