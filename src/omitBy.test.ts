import expect from "expect";
import { omitBy } from ".";

describe("omitBy", () => {
	const b = { c: 1 };
	const object = { a: 1, b };

	it("should omit by function", () => {
		expect(omitBy(object, (v, k) => k === "b")).toStrictEqual({ a: 1 });
	});
});
