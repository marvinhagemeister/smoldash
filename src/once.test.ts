import expect from "expect";
import { once } from ".";

describe("once", () => {
	it("should return same result", () => {
		let id = 0;
		const source = () => ++id;
		const fn = once(source);

		expect(fn()).toEqual(1);
		expect(fn()).toEqual(1);
	});

	it("should return same result despite arguments", () => {
		let id = 0;
		const source = (n: number) => n + ++id;
		const fn = once(source);

		expect(fn(3)).toEqual(4);
		expect(fn(12)).toEqual(4);
	});
});
