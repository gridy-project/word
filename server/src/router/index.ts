import express from "express";
import api from "./api";
import oauth from "./oauth";
import test from "./test";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
	res.send("Hello World");
});

router.use("/api", api);
router.use("/oauth", oauth);
router.use("/test", test);

export default router;
