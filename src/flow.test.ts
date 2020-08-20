import expect from "expect";
import { flow } from ".";

describe("flow", () => {
	const add = (a: number, b: number) => a + b;
	const square = (n: number) => n * n;
	it("should call next function", () => {
		const fn = flow(add, square);
		expect(fn(1, 2)).toEqual(9);
	});
});
