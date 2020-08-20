import expect from "expect";
import { head } from ".";

describe("head", () => {
	it("should take the first element of an array", () => {
		expect(head([1])).toEqual(1);
	});

	it("should return undefined if array is empty", () => {
		expect(head([])).toEqual(undefined);
	});
});
