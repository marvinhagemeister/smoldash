import expect from "expect";
import { find } from ".";

const users = [
	{ user: "barney", age: 36, active: true },
	{ user: "fred", age: 40, active: false },
	{ user: "pebbles", age: 1, active: true },
];

describe("find", () => {
	it("should find in array", () => {
		expect(find([1, 2, 3], n => n >= 2)).toEqual(2);
	});

	it("should not throw on non-array", () => {
		expect(find(null as any)).toEqual(undefined);
		expect(find(undefined as any)).toEqual(undefined);
		expect(find("test" as any)).toEqual(undefined);
	});

	it("should find from index", () => {
		expect(find([1, 3, 2], v => v < 3, 1)).toEqual(2);
	});

	it("should use iteratee shorthand", () => {
		expect(find(users, { age: 1, active: true })).toEqual({
			user: "pebbles",
			age: 1,
			active: true,
		});
	});

	it("should array predicate", () => {
		expect(find(users, ["active", false])).toEqual({
			user: "fred",
			age: 40,
			active: false,
		});
	});

	it("should property predicate", () => {
		expect(find(users, "active")).toEqual({
			user: "barney",
			age: 36,
			active: true,
		});
	});
});
