import expect from "expect";
import { split } from ".";

describe("split", () => {
	it("should split string", () => {
		expect(split("a-b-c", "-", 2)).toEqual(["a", "b"]);
	});
});
