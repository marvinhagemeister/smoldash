import expect from "expect";
import { defaultsDeep } from ".";

describe("defaultsDeep", () => {
	it("should assign defaults recursively", () => {
		let object = defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } });
		expect(object).toEqual({ a: { b: 2, c: 3 } });

		// more tricky case with repeating 'd' value. It should take the first 'd' value
		object = defaultsDeep({ a: { b: 1 } }, { a: { c: 2 }, d: 3 }, { d: 4 });
		expect(object).toEqual({ a: { b: 1, c: 2 }, d: 3 });
	});
});
