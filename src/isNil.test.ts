import expect from "expect";
import { isNil } from ".";

describe("isNil", () => {
	it("should return true for null and undefined", () => {
		expect(isNil(null)).toEqual(true);
		expect(isNil(undefined)).toEqual(true);
	});
	it("should return false for other primitives", () => {
		expect(isNil(1)).toEqual(false);
		expect(isNil(0)).toEqual(false);
		expect(isNil("a")).toEqual(false);
		expect(isNil("")).toEqual(false);
		expect(isNil(true)).toEqual(false);
		expect(isNil(false)).toEqual(false);
	});
});
