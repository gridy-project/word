import express from "express";
import { quizController } from "~/controller/api/quiz";
import { userController } from "~/controller/api/user";

// user
const userRouter = express.Router();
userRouter.get("/member", userController.member);
userRouter.post("/login", userController.login);
userRouter.post("/logout", userController.logout);
userRouter.post("/register", userController.register);

// quiz
const quizRouter = express.Router();
quizRouter.get("/", quizController.getQuizList);
quizRouter.get("/:quiz_id", quizController.getQuiz);
quizRouter.post("/", quizController.addQuiz);
quizRouter.put("/:id", quizController.modifyQuiz);
quizRouter.delete("/:id", quizController.removeQuiz);

const apiRouter = express.Router();
apiRouter.use("/user", userRouter);
apiRouter.use("/quiz", quizRouter);

export default apiRouter;
