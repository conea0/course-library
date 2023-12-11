import { PartProps } from '@/types/index';

const users = [
	{
		id: 1,
		partIds: [1, 2, 3, 4, 5, 6, 7],
	},
	{
		id: 2,
		partIds: [8, 9, 10, 11, 12, 13, 14],
	},
	{
		id: 3,
		partIds: [15, 16, 17, 18, 19, 20, 21]
	},
];
4
const parts = [
	...Array(7).fill(0).map((_, i) => ({
		id: i + 1,
		partNumber: i + 1,
		status: Math.floor(Math.random() * 101),
	})),
	...Array(7).fill(0).map((_, i) => ({
		id: i + 8,
		partNumber: i + 1,
		status: Math.floor(Math.random() * 101),
	})),
	...Array(7).fill(0).map((_, i) => ({
		id: i + 15,
		partNumber: i + 1,
		status: Math.floor(Math.random() * 101),
	})),
];

export const getAllPartsMock = async (userId: number): Promise<PartProps[]> => {
	const user = users.find((user) => user.id === userId);
	if (!user) {
		throw new Error('User not found');
	}

	const partIds = user.partIds;
	const result = parts.filter((part) => partIds.includes(part.id));

	return result;
};
