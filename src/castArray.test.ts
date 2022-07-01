import expect from "expect";
import { castArray } from ".";

describe("castArray", () => {
	it("should cast number", () => {
		expect(castArray(1)).toEqual([1]);
	});
	it("should cast object", () => {
		const obj = { a: 1 };
		expect(castArray(obj)).toEqual([obj]);
	});
	it("should cast string", () => {
		expect(castArray("abc")).toEqual(["abc"]);
	});
	it("should cast null", () => {
		expect(castArray(null)).toEqual([null]);
	});
	it("should cast undefined", () => {
		expect(castArray(undefined)).toEqual([undefined]);
	});
	it("should cast no arguments", () => {
		expect(castArray()).toEqual([]);
		expect(castArray()).toHaveLength(0);
	});
	it("should not cast array", () => {
		const array = [1, 2, 3];
		expect(castArray(array)).toStrictEqual(array);
	});
});
