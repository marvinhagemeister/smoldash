import expect from "expect";
import { uniq } from ".";

describe("uniq", () => {
	it("should work with numbers", () => {
		expect(uniq([2, 1, 2])).toEqual([2, 1]);
	});

	it("should work with objects", () => {
		const o1 = { x: 1 };
		const o2 = { x: 2 };
		expect(uniq([o1, o2, o1])).toEqual([o1, o2]);
	});
});
