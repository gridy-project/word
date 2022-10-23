import { PrismaClient } from "@prisma/client";

interface Word {
	id?: number;
	english?: string;
	korean?: string;
}

const prisma = new PrismaClient();
const word = {
	getWord: (id: number) => {
		return prisma.word.findUnique({
			where: {
				id,
			},
		});
	},
	getWordList: () => {
		return prisma.word.findMany();
	},
	addWord: ({ english = "", korean = "" }: Word) => {
		return prisma.word.create({
			data: {
				english,
				korean,
			},
		});
	},
	removeWord: (id: number) => {
		return prisma.word.delete({
			where: {
				id,
			},
		});
	},
	modifyWord: ({ id = 0, english = "", korean = "" }: Word) => {
		return prisma.word.update({
			where: {
				id,
			},
			data: {
				english,
				korean,
			},
		});
	},
};

export { word };
