import expect from "expect";
import { capitalize } from "./string";

describe("capitalize", () => {
	it("should capitalize strings", () => {
		expect(capitalize("foo--bAr")).toEqual("Foo--bar");
		expect(capitalize(" foo--bAr")).toEqual(" foo--bar");
		// unicode test
		expect(capitalize("βΕε_Β")).toEqual("Βεε_β");
	});
});
