import { Response } from "express";

interface ISuccess {
	data: any;
}

interface IAlert {
	status: number;
	message: any;
}

interface IError {
	status: number;
	error: any;
}

const api = {
	success: (res: Response, { data }: ISuccess) => {
		res.status(200).json({ result: true, data });
	},
	alert: (res: Response, { status, message }: IAlert) => {
		res.status(status).json({ result: false, status, message });
	},
	failed: (res: Response, { status, error }: IError) => {
		res.status(status).json({ result: false, status, error });
	},
};

export default api;
