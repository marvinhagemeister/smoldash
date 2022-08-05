import expect from "expect";
import { last } from ".";

describe("last", () => {
	it("should return last item", () => {
		expect(last([1, 2, 3])).toEqual(3);
	});
});
