import expect from "expect";
import { some } from ".";

const users = [
	{ user: "barney", age: 36, active: true },
	{ user: "pebbles", age: 40, active: true },
];

const inactiveUsers = [
	{ user: "barney", age: 36, active: false },
	{ user: "pebbles", age: 40, active: false },
];

describe("some", () => {
	it("should find in array", () => {
		expect(some(users, n => n.active)).toEqual(true);
		expect(some(users, n => !n.active)).toEqual(false);
	});

	it("should not throw on non-array", () => {
		expect(some(null as any)).toEqual(false);
		expect(some(undefined as any)).toEqual(false);
		expect(some("test" as any)).toEqual(false);
	});

	it("should use object predicate", () => {
		expect(some(users, { active: true })).toEqual(true);
		expect(some(users, { age: 40, active: true })).toEqual(true);
		expect(some(users, { age: 40, active: false })).toEqual(false);
	});

	it("should array predicate", () => {
		expect(some(users, ["active", true])).toEqual(true);
		expect(some(users, ["active", false])).toEqual(false);
	});

	it("should property predicate", () => {
		expect(some(users, "active")).toEqual(true);
		expect(some(inactiveUsers, "active")).toEqual(false);
	});
});
