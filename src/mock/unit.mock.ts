import { UnitProps } from "@/types";

const partUnits = [
	{
		partId: 1,
		unitIds: [1, 2, 3, 4, 5, 6, 7],
	},
	{
		partId: 2,
		unitIds: [8, 9, 10, 11, 12, 13, 14],
	},
	{
		partId: 3,
		unitIds: [15, 16, 17, 18, 19, 20, 21]
	},
];

const units: UnitProps[] = [
	{
		id: 1,
		name: "Unit 1",
		unitNumber: 1,
		problemCount: 7,
		status: 100,
	},
	{
		id: 2,
		name: "Unit 2",
		unitNumber: 2,
		problemCount: 7,
		status: 100,
	},
	{
		id: 3,
		name: "Unit 3",
		unitNumber: 3,
		problemCount: 7,
		status: 100,
	},
	{
		id: 4,
		name: "Unit 4",
		unitNumber: 4,
		problemCount: 7,
		status: 100,
	},
	{
		id: 5,
		name: "Unit 5",
		unitNumber: 5,
		problemCount: 7,
		status: 100,
	},
	{
		id: 6,
		name: "Unit 6",
		unitNumber: 6,
		problemCount: 7,
		status: 100,
	},
	{
		id: 7,
		name: "Unit 7",
		unitNumber: 7,
		problemCount: 7,
		status: 100,
	},
	{
		id: 8,
		name: "Unit 8",
		unitNumber: 8,
		problemCount: 7,
		status: 100,
	},
	{
		id: 9,
		name: "Unit 9",
		unitNumber: 9,
		problemCount: 7,
		status: 100,
	},
	{
		id: 10,
		name: "Unit 10",
		unitNumber: 10,
		problemCount: 7,
		status: 100,
	},
	{
		id: 11,
		name: "Unit 11",
		unitNumber: 11,
		problemCount: 7,
		status: 100,
	},
	{
		id: 12,
		name: "Unit 12",
		unitNumber: 12,
		problemCount: 7,
		status: 100,
	},
	{
		id: 13,
		name: "Unit 13",
		unitNumber: 13,
		problemCount: 7,
		status: 100,
	},
	{
		id: 14,
		name: "Unit 14",
		unitNumber: 14,
		problemCount: 7,
		status: 100,
	}
];

export const getAllUnitsMock = async (partId: number): Promise<UnitProps[]> => {
	const part = partUnits.find(pu => pu.partId === partId);
	if (!part) {
		throw new Error('User not found');
	}

	const partIds = part.unitIds
	const result = units.filter(pi => partIds.includes(pi.unitNumber))

	return result
}
