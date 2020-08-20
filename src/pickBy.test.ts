import expect from "expect";
import { pickBy } from ".";

describe("pickBy", () => {
	const obj = { a: 1, b: "2", c: 3 };
	it("should filter values by callback", () => {
		expect(pickBy(obj, x => typeof x === "number")).toEqual({ a: 1, c: 3 });
	});
});
