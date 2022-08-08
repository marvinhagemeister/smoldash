import expect from "expect";
import { isPlainObject } from ".";

describe("isPlainObject", () => {
	it("should return true for plain objects", () => {
		expect(isPlainObject({})).toEqual(true);
		expect(isPlainObject(new Date())).toEqual(false);
		expect(isPlainObject(null)).toEqual(false);
		expect(
			isPlainObject(function () {
				return true;
			}),
		).toEqual(false);
	});

	it("should return false for other primitives", () => {
		expect(isPlainObject(false)).toEqual(false);
		expect(isPlainObject(NaN)).toEqual(false);
		expect(isPlainObject(0)).toEqual(false);
		expect(isPlainObject("")).toEqual(false);
	});
});
