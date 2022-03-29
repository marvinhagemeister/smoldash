import expect from "expect";
import { mapKeys } from ".";

describe("mapKeys", () => {
	it("should map keys by function", () => {
		const result = mapKeys({ a: 1, b: 2 }, function (value, key) {
			return key + value;
		});
		expect(result).toEqual({ a1: 1, b2: 2 });
	});
});
