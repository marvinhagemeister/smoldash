import expect from "expect";
import { concat } from ".";

describe("concat", () => {
	it("should concat three arrays", () => {
		expect(concat([1, 2], [3, 4], [5])).toEqual([1, 2, 3, 4, 5]);
	});
});
