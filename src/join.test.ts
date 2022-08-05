import expect from "expect";
import { join } from ".";

describe("join", () => {
	it("should join strings", () => {
		expect(join(["a", "b", "c"], "~")).toEqual("a~b~c");
	});
});
