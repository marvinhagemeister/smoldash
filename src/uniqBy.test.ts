import expect from "expect";
import { uniqBy } from ".";

describe("uniqBy", () => {
	it("should work with numbers", () => {
		expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
	});

	it("should work with objects", () => {
		expect(uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], "x")).toEqual([
			{ x: 1 },
			{ x: 2 },
		]);
	});
});
