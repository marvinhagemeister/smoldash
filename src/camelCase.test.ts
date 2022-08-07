import expect from "expect";
import { camelCase } from "./string";

describe("camelCase", () => {
	it("should convert other case strings", () => {
		expect(camelCase("Foo Bar")).toEqual("fooBar");
		expect(camelCase("FooPascal")).toEqual("fooPascal");
		expect(camelCase("foo_snake")).toEqual("fooSnake");
		expect(camelCase("foo-kebab")).toEqual("fooKebab");
		expect(camelCase("HTMLElement")).toEqual("htmlElement");
		expect(camelCase("aHTMLElement")).toEqual("aHtmlElement");
		expect(camelCase("__FOO__BAZ__")).toEqual("fooBaz");
	});

	it("should convert numeric string", () => {
		expect(camelCase("A1")).toEqual("a1");
		expect(camelCase("1A")).toEqual("1A");
	});

	it("should convert non-alphanumeric/unicode string", () => {
		expect(camelCase("_ Test, this_function 01 ")).toEqual(
			"testThisFunction01",
		);
		// lodash gets this wrong
		expect(camelCase("_ Test, this_wStr 01 Β βΕε_β ")).toEqual(
			"testThisWStr01ΒΒΕεΒ",
		);
	});
});
