import { getAllPartsMock } from "./part.mock";
import { getAllUnitsMock } from "./unit.mock";

test("userId = 1 で正しく動作すること", async () => {
	const result = await getAllPartsMock(1);
	const ids = result.map((part) => part.id);
	expect(ids).toEqual([1, 2, 3, 4, 5, 6, 7]);

	const partNumbers = result.map((part) => part.partNumber);
	expect(partNumbers).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test("userId = 2 で正しく動作すること", async () => {
	const result = await getAllPartsMock(2);
	const ids = result.map((part) => part.id);
	expect(ids).toEqual([8, 9, 10, 11, 12, 13, 14]);

	const partNumbers = result.map((part) => part.partNumber);
	expect(partNumbers).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test("userId = 4 でエラーが発生すること", async () => {
	await expect(getAllPartsMock(4)).rejects.toThrow("User not found");
});

test("partId = 2で正しく動作すること", )
