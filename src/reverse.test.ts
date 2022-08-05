import expect from "expect";
import { reverse } from ".";

describe("reverse", () => {
	it("should reverse items in array", () => {
		expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
	});
});
