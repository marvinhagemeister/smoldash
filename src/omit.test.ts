import expect from "expect";
import { omit } from ".";

describe("omit", () => {
	const object = { a: 1, b: "2", c: 3 };

	it("should omit paths", () => {
		expect(omit(object, ["a", "c"])).toEqual({ b: "2" });
	});
});
