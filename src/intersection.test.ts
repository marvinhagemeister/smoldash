import expect from "expect";
import { intersection } from ".";

describe("intersection", () => {
	it("should find intersection of 2 arrays", () => {
		expect(intersection([2, 1], [2, 3])).toEqual([2]);
	});
	it("should find intersection of >2 arrays", () => {
		expect(intersection([2, 1], [2, 3], [2, 4])).toEqual([2]);
	});
});
