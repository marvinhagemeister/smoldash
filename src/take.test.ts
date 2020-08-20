import expect from "expect";
import { take } from ".";

describe("take", () => {
	it("should work with empty array", () => {
		expect(take([], 2)).toEqual([]);
	});

	it("should take out elements", () => {
		expect(take([1, 2, 3], 2)).toEqual([1, 2]);
	});

	it("should take out elements #2", () => {
		expect(take([1, 2, 3], 4)).toEqual([1, 2, 3]);
	});
});
