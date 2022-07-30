import expect from "expect";
import { initial, join, last, reverse, split } from ".";

describe("initial", () => {
	it("should return items except last one", () => {
		expect(initial([1, 2, 3])).toEqual([1, 2]);
	});
});

describe("join", () => {
	it("should join strings", () => {
		expect(join(["a", "b", "c"], "~")).toEqual("a~b~c");
	});
});

describe("last", () => {
	it("should return last item", () => {
		expect(last([1, 2, 3])).toEqual(3);
	});
});

describe("reverse", () => {
	it("should reverse items in array", () => {
		expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
	});
});

describe("split", () => {
	it("should split string", () => {
		expect(split("a-b-c", "-", 2)).toEqual(["a", "b"]);
	});
});
