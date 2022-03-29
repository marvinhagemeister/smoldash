import expect from "expect";
import { set } from ".";

describe("set", () => {
	const object = { a: [{ b: { c: 3 } }] };

	it("should set item by path", () => {
		set(object, "a[0].b.c", 4);
		expect(object.a[0].b.c).toEqual(4);
	});

	it("should support array paths", () => {
		set(object, ["x", "0", "y", "z"], 5);
		expect(
			// @ts-ignore
			object.x[0].y.z,
		).toEqual(5);
	});
});
