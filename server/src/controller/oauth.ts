import { Request, Response } from "express";

const naverCallback = (req: Request, res: Response) => {
	res.json({ code: 1 });
};

export const oauthController = {
	naverCallback,
};
