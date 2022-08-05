import expect from "expect";
import { isObjectLike } from ".";

describe("isObjectLike", () => {
	function func() {
		return true;
	}

	it("should return true for objects", () => {
		expect(isObjectLike({})).toEqual(true);
		expect(isObjectLike([])).toEqual(true);
		expect(isObjectLike(new Date())).toEqual(true);
	});
	it("should return false for null, functions and other primitives", () => {
		expect(isObjectLike(null)).toEqual(false);
		expect(isObjectLike(func)).toEqual(false);
		expect(isObjectLike(NaN)).toEqual(false);
	});
});
