import expect from "expect";
import { isEmpty } from ".";

describe("isEmpty", () => {
	it("should work with primitives", () => {
		expect(isEmpty(null)).toEqual(true);
		expect(isEmpty(true)).toEqual(true);
		expect(isEmpty(1)).toEqual(true);
	});

	it("should work with arrays", () => {
		expect(isEmpty([])).toEqual(true);
		expect(isEmpty([1, 2, 3])).toEqual(false);
	});

	it("should work with objects", () => {
		expect(isEmpty({})).toEqual(true);
		expect(isEmpty({ foo: 123 })).toEqual(false);
	});

	it("should work with Sets", () => {
		expect(isEmpty(new Set())).toEqual(true);
		expect(isEmpty(new Set([1]))).toEqual(false);
	});

	it("should work with Maps", () => {
		expect(isEmpty(new Map())).toEqual(true);
		expect(isEmpty(new Map([[1, 2]]))).toEqual(false);
	});
});
