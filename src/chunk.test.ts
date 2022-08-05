import expect from "expect";
import { chunk } from ".";

describe("chunk", () => {
	it("should chunk by two items", () => {
		expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
			["a", "b"],
			["c", "d"],
		]);
	});
	it("should chunk by three items", () => {
		expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
	});
});
