import expect from "expect";
import { uniqueId } from ".";

describe("uniqueId", () => {
	it("should return unique id", () => {
		expect(uniqueId()).toEqual("1");
		expect(uniqueId()).toEqual("2");
	});

	it("should append a prefix", () => {
		expect(uniqueId("foo")).toEqual("foo1");
		expect(uniqueId("foo")).toEqual("foo2");

		// Should not leak
		uniqueId();
		expect(uniqueId("foo")).toEqual("foo3");
	});
});
