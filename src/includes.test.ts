import expect from "expect";
import { includes } from ".";

describe("includes", () => {
	it("should return true when includes", () => {
		expect(includes([1, 2, 3], 1)).toEqual(true);
	});
	it("should return false when not includes", () => {
		expect(includes([1, 2, 3], 4)).toEqual(false);
	});
});
