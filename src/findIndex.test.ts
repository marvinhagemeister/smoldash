import expect from "expect";
import { findIndex } from ".";

const users = [
	{ user: "barney", active: false },
	{ user: "fred", active: false },
	{ user: "pebbles", active: true },
];

describe("findIndex", () => {
	it("should find in array", () => {
		expect(findIndex(users, o => o.user === "barney")).toEqual(0);
	});

	it("should use object predicate", () => {
		expect(findIndex(users, { user: "fred", active: false })).toEqual(1);
	});

	it("should use array predicate", () => {
		expect(findIndex(users, ["active", false])).toEqual(0);
	});

	it("should use property predicate", () => {
		expect(findIndex(users, "active")).toEqual(2);
	});

	it("should findIndex from index", () => {
		expect(findIndex([1, 3, 2], v => v < 3, 1)).toEqual(2);
	});

	it("should not throw on non-array", () => {
		expect(findIndex(null as any)).toEqual(-1);
		expect(findIndex(undefined as any)).toEqual(-1);
		expect(findIndex("test" as any)).toEqual(-1);
	});
});
