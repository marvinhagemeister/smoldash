import expect from "expect";
import { omit } from ".";

describe("omit", () => {
	const e = { f: 1 };
	const object = { a: 1, b: "2", c: { d: 3 }, e };

	it("should omit paths", () => {
		expect(omit(object, ["a", "c", "e"])).toStrictEqual({ b: "2" });
	});

	it("should deep clone for deep paths", () => {
		expect(omit(object, ["c.d"]).e).not.toBe(e);
	});

	it("should not deep clone for shallow paths", () => {
		expect(omit(object, "c").e).toBe(e);
		expect(omit(object, ["c"]).e).toBe(e);
	});
});
