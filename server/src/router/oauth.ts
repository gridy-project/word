import express from "express";
import { oauthController } from "~/controller/oauth";

const oauthRouter = express.Router();
oauthRouter.use("/naver/callback", oauthController.naverCallback);
// socialRouter.use("/naver/auth", quizRouter);

export default oauthRouter;
