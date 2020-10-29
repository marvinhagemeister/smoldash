import expect from "expect";
import { range } from ".";

describe("once", () => {
	it("with one argument", () => {
		expect(range(4)).toEqual([0, 1, 2, 3]);
	});

	it("with start and end", () => {
		expect(range(2, 6)).toEqual([2, 3, 4, 5]);
	});

	it("with start, end and step", () => {
		expect(range(3, 10, 2)).toEqual([3, 5, 7, 9]);
	});
});
