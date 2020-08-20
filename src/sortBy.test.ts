import expect from "expect";
import { sortBy } from ".";

describe("sortBy", () => {
	it("should do nothing if key array is empty", () => {
		const data = [{ foo: 2 }, { foo: 3 }, { foo: 1 }];
		expect(sortBy(data, [])).toEqual([data[0], data[1], data[2]]);
	});

	it("should sort by property", () => {
		const data = [{ foo: 2 }, { foo: 3 }, { foo: 1 }];
		expect(sortBy(data, ["foo"])).toEqual([data[2], data[0], data[1]]);
	});

	it("should sort by multiple properties", () => {
		const data = [
			{ foo: 2, bar: 3 },
			{ foo: 2, bar: 2 },
			{ foo: 3, bar: 1 },
			{ foo: 1, bar: 3 },
		];
		expect(sortBy(data, ["foo", "bar"])).toEqual([
			data[3],
			data[1],
			data[0],
			data[2],
		]);
	});
});
