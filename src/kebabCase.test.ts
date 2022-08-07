import expect from "expect";
import { kebabCase } from ".";

describe("kebabCase", () => {
	it("should convert title casing", () => {
		expect(kebabCase("Foo Bar")).toBe("foo-bar");
	});
	it("should convert camel casing", () => {
		expect(kebabCase("fooBarBaz")).toBe("foo-bar-baz");
	});
	it("should convert snake case", () => {
		expect(kebabCase("foo_bar")).toBe("foo-bar");
		expect(kebabCase("__FOO_BAR__")).toBe("foo-bar");
		expect(kebabCase("aFOOb")).toBe("a-fo-ob");
	});
	it("should convert non-alphanumeric/unicode string", () => {
		expect(kebabCase("foo!bar1")).toBe("foo-bar-1");
		expect(kebabCase("foo.*barβ β")).toBe("foo-barβ-β");
	});
	it("should convert numbers", () => {
		expect(kebabCase("a11")).toBe("a-11");
		expect(kebabCase("A11")).toBe("a-11");
		expect(kebabCase("11a")).toBe("11-a");
		expect(kebabCase("11A")).toBe("11-a");
	});
});
