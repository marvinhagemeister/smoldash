import expect from "expect";
import { isNumber } from ".";

describe("isNumber", () => {
	it("should return true for number", () => {
		expect(isNumber(1)).toEqual(true);
		expect(isNumber(Infinity)).toEqual(true);
		expect(isNumber(NaN)).toEqual(true);
	});
	it("should return false for other primitives", () => {
		expect(isNumber("")).toEqual(false);
	});
});
