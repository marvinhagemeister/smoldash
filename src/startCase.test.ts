import expect from "expect";
import { startCase } from "./string";

describe("startCase", () => {
	it("should startCase camel cased strings", () => {
		expect(startCase("aT")).toEqual("A T");
		expect(startCase("fooBarBaz")).toEqual("Foo Bar Baz");
		expect(startCase("aFOOb")).toEqual("A FO Ob");
	});
	it("should startCase numbers in strings", () => {
		expect(startCase("a11")).toEqual("A 11");
		expect(startCase("11a")).toEqual("11 A");
	});
	it("should startCase pascal cased in string", () => {
		expect(startCase("FooBarBaz")).toEqual("Foo Bar Baz");
	});
	it("should startCase non-alphanumeric/unicode strings", () => {
		expect(startCase("_ Test, this_wStr GR33 eK Β βΕε_β !!")).toEqual(
			"Test This W Str GR 33 E K Β Β Εε Β",
		);
	});
});
