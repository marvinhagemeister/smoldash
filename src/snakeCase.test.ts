import expect from "expect";
import { snakeCase } from "./string";

describe("snakeCase", () => {
	it("should snakeCase various non-alphanumeric strings", () => {
		expect(snakeCase("_ Test, this_function 01 ")).toEqual(
			"test_this_function_01",
		);
		expect(snakeCase(" testAString_for  _me_ ")).toEqual(
			"test_a_string_for_me",
		);
		expect(snakeCase("address1")).toEqual("address_1");
	});

	it("should snakeCase unicode string", () => {
		expect(snakeCase("_ Test, this_wStr 01 Β βΕ_β")).toEqual(
			"test_this_w_str_01_β_β_ε_β",
		);
	});
});
