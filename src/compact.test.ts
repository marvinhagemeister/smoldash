import expect from "expect";
import { compact } from ".";

describe("compact", () => {
	it("should remove falsy values", () => {
		expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
	});
});
