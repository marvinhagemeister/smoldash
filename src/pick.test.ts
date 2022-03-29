import expect from "expect";
import { pick } from ".";

describe("pick", () => {
	const object = { a: 1, b: "2", c: 3 };

	it("should pick paths", () => {
		expect(pick(object, ["a", "c"])).toEqual({ a: 1, c: 3 });
	});
});
