import expect from "expect";
import { kebabCase } from ".";

describe("kebabCase", () => {
	it("should convert strings to kebab case", () => {
		expect(kebabCase("Foo Bar")).toEqual("foo-bar");
		expect(kebabCase("fooBar")).toEqual("foo-bar");
		expect(kebabCase("__FOO_BAR__")).toEqual("foo-bar");
	});
});
