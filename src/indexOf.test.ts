import expect from "expect";
import { indexOf } from ".";

describe("indexOf", () => {
	it("should return -1 if not found", () => {
		expect(indexOf([1, 2], 3)).toEqual(-1);
		expect(indexOf([1, 2], 3, 10)).toEqual(-1);
		expect(indexOf([1, 2], 3, 1)).toEqual(-1);
	});

	it("should get index of item in array", () => {
		expect(indexOf([1, 2], 2)).toEqual(1);
		expect(indexOf([1, 2], 2)).toEqual(1);
	});

	it("should start from index", () => {
		expect(indexOf([1, 2], 1, 1)).toEqual(-1);
	});
});
