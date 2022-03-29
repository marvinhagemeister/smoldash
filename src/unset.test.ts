import expect from "expect";
import { unset } from ".";

describe("unset", () => {
	const object = { a: [{ b: { c: 7 } }] };

	it("should unset item by path", () => {
		unset(object, "a[0].b.c");
		expect(object).toEqual({ a: [{ b: {} }] });
	});

	it("should support array paths", () => {
		unset(object, ["a", "0", "b", "c"]);
		expect(object).toEqual({ a: [{ b: {} }] });
	});
});
