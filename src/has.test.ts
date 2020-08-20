import expect from "expect";
import { has } from ".";

describe("has", () => {
	const obj = { a: [{ b: { c: 3 } }] };

	it("should return true if found", () => {
		expect(has(obj, "a[0].b.c")).toEqual(true);
	});

	it("should return true if found #2", () => {
		expect(has(obj, ["a", "0", "b", "c"])).toEqual(true);
	});

	it("should return false if not present", () => {
		expect(has(obj, "a.b.c.d.e")).toEqual(false);
	});
});
