import expect from "expect";
import { get } from ".";

describe("get", () => {
	const obj = { a: [{ b: { c: 3 } }] };

	it("should get item by path", () => {
		expect(get(obj, "a[0].b.c")).toEqual(3);
	});

	it("should support array paths", () => {
		expect(get(obj, ["a", "0", "b", "c"])).toEqual(3);
	});

	it("should return default value", () => {
		expect(get(obj, "a.b.c", "default")).toEqual("default");
	});
});
