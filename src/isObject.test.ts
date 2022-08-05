import expect from "expect";
import { isObject } from ".";

describe("isObject", () => {
	function func() {
		return true;
	}

	it("should return true for objects and functions", () => {
		expect(isObject({})).toEqual(true);
		expect(isObject([])).toEqual(true);
		expect(isObject(new Date())).toEqual(true);
		expect(isObject(func)).toEqual(true);
	});
	it("should return false for null and other primitives", () => {
		expect(isObject(null)).toEqual(false);
		expect(isObject(NaN)).toEqual(false);
	});
});
