import expect from "expect";
import { isEqual } from ".";

describe("isEqual", () => {
	it("should compare primitives", () => {
		expect(isEqual(1, 1)).toEqual(true);
		expect(isEqual("a", "a")).toEqual(true);
		expect(isEqual(null, null)).toEqual(true);
		expect(isEqual(true, true)).toEqual(true);
		expect(isEqual(false, false)).toEqual(true);

		expect(isEqual(true, false)).toEqual(false);
		expect(isEqual(false, true)).toEqual(false);
		expect(isEqual(1, 2)).toEqual(false);
		expect(isEqual(1, null)).toEqual(false);
		expect(isEqual(1, "1" as any)).toEqual(false);
		expect(isEqual(null, undefined)).toEqual(false);
	});

	it("should compare objects", () => {
		expect(isEqual({ a: 1 }, { a: 1 })).toEqual(true);
		expect(isEqual({ a: 1 }, { a: 2 })).toEqual(false);

		expect(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 })).toEqual(true);
		expect(isEqual({ a: 1, b: 1 }, { a: 1, b: 2 })).toEqual(false);

		expect(isEqual({ a: 1, b: 1 }, { a: 1 })).toEqual(false);
		expect(isEqual({ a: 1 }, { a: 1, b: 1 })).toEqual(false);
	});

	it("should compare arrays", () => {
		expect(isEqual([1, 2], [1, 2])).toEqual(true);
		expect(isEqual([1, 2], [1, 3])).toEqual(false);

		expect(isEqual([1, 2], [1])).toEqual(false);
		expect(isEqual([1], [1, 3])).toEqual(false);
	});

	it("should compare Dates", () => {
		expect(isEqual(new Date(2020, 11, 17), new Date(2020, 11, 17))).toEqual(
			true,
		);
		expect(isEqual(new Date(2020, 11, 17), new Date(2020, 11, 16))).toEqual(
			false,
		);
	});

	it("should compare RegExp objects", () => {
		expect(isEqual(/foo/, /foo/)).toEqual(true);
		expect(isEqual(/foo/i, /foo/)).toEqual(false);
		expect(isEqual(/foo/i, /bar/i)).toEqual(false);
	});

	it("should compare Set objects", () => {
		expect(isEqual(new Set([1, 2]), new Set([1, 2]))).toEqual(true);
		expect(isEqual(new Set([1, 2]), new Set([1, 3]))).toEqual(false);
		expect(isEqual(new Set([1, 2]), new Set([1]))).toEqual(false);
	});

	it("should compare Map objects", () => {
		expect(
			isEqual(
				new Map([
					[1, 1],
					[2, 2],
				]),
				new Map([
					[1, 1],
					[2, 2],
				]),
			),
		).toEqual(true);
		expect(isEqual(new Map([[1, 1]]), new Map([]))).toEqual(false);
		expect(isEqual(new Map([[1, 1]]), new Map([[1, 2]]))).toEqual(false);
		expect(isEqual(new Map([[1, 1]]), new Map([[2, 1]]))).toEqual(false);
	});
});
