import { Request, Response } from "express";
import bcrypt from "bcrypt";

const SECRET_KEY = "MYSECRETKEY";

const login = (req: Request, res: Response) => {
	res.json({ code: 1 });
};

const logout = (req: Request, res: Response) => {
	res.json({ code: 2 });
};

const register = async (req: Request, res: Response) => {
	const { email, password, name } = req.body;

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	res.json({ code: 3 });
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
