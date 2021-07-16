import expect from "expect";
import { groupBy } from ".";

describe("groupBy", () => {
	it("should no throw on non-array", () => {
		expect(groupBy(null as any, x => x as string)).toEqual({});
	});

	it("should use property iteratee", () => {
		expect(groupBy(["one", "two", "three"], "length")).toEqual({
			"3": ["one", "two"],
			"5": ["three"],
		});
	});

	it("should use callback iteratee", () => {
		expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
			"4": [4.2],
			"6": [6.1, 6.3],
		});
	});
});
