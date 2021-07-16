import expect from "expect";
import { filter } from ".";

const users = [
	{ user: "barney", age: 36, active: true },
	{ user: "fred", age: 40, active: false },
];

describe("filter", () => {
	it("should filter array", () => {
		expect(filter(users, o => !o.active)).toEqual([
			{ user: "fred", age: 40, active: false },
		]);
	});

	it("should not throw on non-array", () => {
		expect(filter(null as any)).toEqual([]);
		expect(filter(undefined as any)).toEqual([]);
		expect(filter("test" as any)).toEqual([]);
	});

	it("should use object predicate", () => {
		expect(filter(users, { age: 36, active: true })).toEqual([
			{ user: "barney", age: 36, active: true },
		]);
	});

	it("should use array predicate", () => {
		expect(filter(users, ["active", false])).toEqual([
			{ user: "fred", age: 40, active: false },
		]);
	});

	it("should use property predicate", () => {
		expect(filter(users, "active")).toEqual([
			{ user: "barney", age: 36, active: true },
		]);
	});
});
