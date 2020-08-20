import expect from "expect";
import { forEach } from ".";

function run(input: any) {
	const res: any[] = [];
	forEach(input, (...args) => res.push(args));
	return res;
}

describe("forEach", () => {
	it("should work with empty array", () => {
		expect(run([])).toEqual([]);
	});

	it("should loop over arrays", () => {
		const arr = [1, 2, 3];
		expect(run(arr)).toEqual([
			[1, 0, arr],
			[2, 1, arr],
			[3, 2, arr],
		]);
	});

	it("should loop over Sets", () => {
		const v = new Set([1, 2, 3]);
		expect(run(v)).toEqual([
			[1, 1, v],
			[2, 2, v],
			[3, 3, v],
		]);
	});

	it("should loop over Maps", () => {
		const v = new Map([
			[1, "1"],
			[2, "2"],
			[3, "3"],
		]);
		expect(run(v)).toEqual([
			["1", 1, v],
			["2", 2, v],
			["3", 3, v],
		]);
	});

	it("should loop over objects", () => {
		const v = { a: "a1", b: "b1", c: "c1" };
		expect(run(v)).toEqual([
			["a1", "a", v],
			["b1", "b", v],
			["c1", "c", v],
		]);
	});
});
