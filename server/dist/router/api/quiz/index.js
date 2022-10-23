"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

let count = 3;
let quizList = [{
  id: 1,
  question: "quiz1",
  answer: "answer1"
}, {
  id: 2,
  question: "quiz2",
  answer: "answer2"
}, {
  id: 3,
  question: "quiz3",
  answer: "answer3"
}];
router.get("/", (req, res) => {
  res.json({
    result: true,
    data: quizList
  });
});
router.get("/:quiz_id", (req, res) => {
  const {
    quiz_id
  } = req.params;
  const quiz = quizList.filter(data => String(data.id) === quiz_id);
  res.json({
    result: true,
    data: quiz
  });
});
router.post("/", (req, res) => {
  const {
    question,
    answer
  } = req.body;
  count++;
  quizList.push({
    id: count,
    question,
    answer
  });
  res.json({
    result: true,
    data: quizList
  });
});
router.put("/:id", (req, res) => {
  const {
    id
  } = req.params;
  const {
    question,
    answer
  } = req.body;
  count++;
  quizList = quizList.map(v => {
    if (v.id === Number(id)) {
      return { ...v,
        question,
        answer
      };
    }

    return v;
  });
  res.json({
    result: true,
    data: quizList
  });
});
router.delete("/:id", (req, res) => {
  const {
    id
  } = req.params;
  count--;
  quizList = quizList.filter(v => v.id === Number(id));
  res.json({
    result: true,
    data: quizList
  });
});
var _default = router;
exports.default = _default;