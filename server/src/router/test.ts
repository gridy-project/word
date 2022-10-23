import { PrismaClient, User, Word } from "@prisma/client";
import express, { Request, Response } from "express";
import { helper } from "~/util/helper";

const prisma = new PrismaClient();

const testRouter = express.Router();

testRouter.get("/", async (req: Request, res: Response) => {
	const result = await prisma.$queryRaw<User[]>`SELECT * FROM word`;

	res.send(result);
});

testRouter.get("/english/:english", async (req: Request, res: Response) => {
	const { english } = req.params;

	const result = await prisma.$queryRaw<
		Word[]
	>`SELECT * FROM word WHERE english = ${english}`;

	if (result.length > 0) {
		helper.api.success(res, { data: result[0] });
	} else {
		helper.api.alert(res, { status: 404, message: "Word Not Found" });
	}
});

export default testRouter;
