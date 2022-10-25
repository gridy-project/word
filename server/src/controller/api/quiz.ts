import { Word } from "@prisma/client";
import { Request, Response } from "express";
import { word } from "~/model/word";

interface IResponseData {
	result: boolean;
	data: {} | [] | Word;
}

/**
 * Get Quiz List
 * 
 */
const getQuizList = async (req: Request, res: Response<IResponseData>) => {
	const list = await word.getWordList();
	res.json({ result: true, data: list });
};

/**
 * Get Quiz
 */
const getQuiz = async (req: Request, res: Response<IResponseData>) => {
	const item = await word.getWord(Number(req.params.id));
	res.json({ result: true, data: item as Word });
};

/**
 * Add Quiz
 */
const addQuiz = async (req: Request, res: Response<IResponseData>) => {
	const { english, korean } = req.body;
	const result = await word.addWord({ english, korean });
	res.json({ result: true, data: result });
};

const modifyQuiz = async (req: Request, res: Response<IResponseData>) => {
	const { id } = req.params;
	const { english, korean } = req.body;
	const result = await word.modifyWord({ id: Number(id), english, korean });
	res.json({ result: true, data: result });
};

/**
 * Delete Quiz
 */
const removeQuiz = async (req: Request, res: Response<IResponseData>) => {
	const { id } = req.params;
	const result = await word.removeWord(Number(id));
	res.json({ result: true, data: result });
};

export const quizController = {
	getQuizList,
	getQuiz,
	addQuiz,
	modifyQuiz,
	removeQuiz,
};
