import expect from "expect";
import { initial } from ".";

describe("initial", () => {
	it("should return items except last one", () => {
		expect(initial([1, 2, 3])).toEqual([1, 2]);
	});
});
