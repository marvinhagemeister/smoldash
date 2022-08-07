import expect from "expect";
import { upperFirst } from "./string";

describe("upperFirst", () => {
	it("should upperFirst strings", () => {
		expect(upperFirst("foo--bAr")).toEqual("Foo--bAr");
		expect(upperFirst(" foo--bAr")).toEqual(" foo--bAr");
		expect(upperFirst("fred")).toEqual("Fred");
		expect(upperFirst("FRED")).toEqual("FRED");
		// unicode test
		expect(upperFirst("βΕε_Β")).toEqual("ΒΕε_Β");
	});
});
