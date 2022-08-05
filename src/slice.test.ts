import expect from "expect";
import { slice } from ".";

describe("slice", () => {
	it("should slice array", () => {
		expect(slice([1, 2, 3], 1, -1)).toEqual([2]);
	});
});
