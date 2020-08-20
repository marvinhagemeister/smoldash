import expect from "expect";
import { at } from ".";

describe("at", () => {
	it("should get object/array values by paths", () => {
		const obj = { a: [{ b: { c: 3 } }, 4] };
		expect(at(obj, ["a[0].b.c", "a[1]"])).toEqual([3, 4]);
	});
});
