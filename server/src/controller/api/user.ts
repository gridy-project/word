import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const SECRET_KEY = "MYSECRETKEY";

const login = async (req: Request, res: Response) => {
	const { username, password } = req.body;

	const result = await prisma.user.findUnique({
		where: {
			username: username,
		},
	});

	if (result) {
		const compare = await bcrypt.compare(password, result.password);
		res.status(200).send({ compare });
	} else {
		res.status(200).send({ result });
	}
};

const logout = (req: Request, res: Response) => {
	res.status(200).send({ code: 2 });
};

const register = async (req: Request, res: Response) => {
	const { username, password } = req.body;

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	// prisma db register

	const result = await prisma.user.create({
		data: {
			username,
			password: hash,
		},
	});

	res.json({ result });
};

const member = (req: Request, res: Response) => {
	res.json({ code: 4 });
};

export const userController = {
	login,
	logout,
	register,
	member,
};
