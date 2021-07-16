import expect from "expect";
import { every } from ".";

const users = [
	{ user: "barney", age: 36, active: true },
	{ user: "pebbles", age: 40, active: true },
];

const inactiveUsers = [
	{ user: "barney", age: 36, active: false },
	{ user: "pebbles", age: 40, active: false },
];

describe("every", () => {
	it("should check in array", () => {
		expect(every(users, n => n.active)).toEqual(true);
		expect(every(users, n => !n.active)).toEqual(false);
	});

	it("should not throw on non-array", () => {
		expect(every(null as any)).toEqual(true);
		expect(every(undefined as any)).toEqual(true);
		expect(every("test" as any)).toEqual(true);
	});

	it("should use object predicate", () => {
		expect(every(users, { active: true })).toEqual(true);
		expect(every(users, { user: "barney" })).toEqual(false);
		expect(every(users, { user: "barney", active: true })).toEqual(false);
		expect(every(users, { active: false })).toEqual(false);
	});

	it("should array predicate", () => {
		expect(every(users, ["active", true])).toEqual(true);
		expect(every(users, ["active", false])).toEqual(false);
	});

	it("should property predicate", () => {
		expect(every(users, "active")).toEqual(true);
		expect(every(inactiveUsers, "active")).toEqual(false);
	});
});
