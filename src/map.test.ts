import expect from "expect";
import { map } from ".";

const square = (n: number) => n * n;

const users = [
	{ user: "barney", age: 36, active: true },
	{ user: "pebbles", age: 1, active: true },
];

describe("map", () => {
	it("should map array", () => {
		expect(map([4, 8], square)).toEqual([16, 64]);
	});

	it("should not throw on non-array", () => {
		expect(map(null as any)).toEqual([]);
		expect(map(undefined as any)).toEqual([]);
		expect(map("test" as any)).toEqual([]);
	});

	it("should use iteratee shorthand", () => {
		expect(map(users, "user")).toEqual(["barney", "pebbles"]);
	});
});
