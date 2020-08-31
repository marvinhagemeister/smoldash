import expect from "expect";
import { at } from ".";

describe("at", () => {
	it("should get object/array values by paths", () => {
		const obj = { a: [{ b: { c: 3 } }, 4] };
		expect(at(obj, ["a[0].b.c", "a[1]"])).toEqual([3, 4]);
	});

	it("should work with string arg", () => {
		const obj = { a: [{ b: { c: 3 } }, 4] };
		expect(at(obj, "a[0].b.c")).toEqual([3]);
	});

	it("should work with complex examples", () => {
		const data = {
			response: { data: { errors: [{ code: "notEmpty", key: "email" }] } },
		};
		expect(at(data, "response.data.errors")).toEqual([
			[{ key: "email", code: "notEmpty" }],
		]);

		const data2 = { response: { data: { code: "verificationNeeded" } } };
		expect(at(data2, "response.data")).toEqual([
			{ code: "verificationNeeded" },
		]);
	});
});
