import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const user = {
	getUserByUserName: (id: number) => {
		return prisma.user.findUnique({
			where: {
				id,
			},
		});
	},
};
