import expect from "expect";
import { keyBy } from ".";

describe("keyBy", () => {
	const array = [
		{ dir: "left", code: 97 },
		{ dir: "right", code: 100 },
	];

	it("should no throw on non-array", () => {
		expect(keyBy(null as any, x => x as string)).toEqual({});
	});

	it("should use property iteratee", () => {
		expect(keyBy(array, "dir")).toEqual({
			left: { dir: "left", code: 97 },
			right: { dir: "right", code: 100 },
		});
	});

	it("should use callback iteratee", () => {
		expect(keyBy(array, o => String.fromCharCode(o.code))).toEqual({
			a: { dir: "left", code: 97 },
			d: { dir: "right", code: 100 },
		});
	});
});
