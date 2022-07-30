import expect from "expect";
import { sumBy } from ".";

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

describe("sumBy", () => {
	it("should sum an array of objects", () => {
		expect(sumBy(objects, o => o.n)).toEqual(20);
	});

	it("should not throw on non-array", () => {
		expect(sumBy(null as any)).toEqual(0);
		expect(sumBy(undefined as any)).toEqual(0);
		expect(sumBy("test" as any)).toEqual(0);
	});

	it("should property predicate", () => {
		expect(sumBy(objects, "n")).toEqual(20);
	});
});
