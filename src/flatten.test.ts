import expect from "expect";
import { flatten } from ".";

describe("flatten", () => {
	it("should flatten array", () => {
		expect(flatten([1, [2]])).toEqual([1, 2]);
	});

	it("should flatten single depth", () => {
		expect(flatten([1, [2, [3]]])).toEqual([1, 2, [3]]);
	});
});
