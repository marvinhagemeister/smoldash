import expect from "expect";
import { orderBy } from ".";

describe("orderBy", () => {
	it("should do nothing if key array is empty", () => {
		const data = [{ foo: 2 }, { foo: 3 }, { foo: 1 }];
		expect(orderBy(data, [])).toEqual([data[0], data[1], data[2]]);
	});

	it("should sort by property", () => {
		const data = [{ foo: 2 }, { foo: 3 }, { foo: 1 }];
		expect(orderBy(data, ["foo"])).toEqual([data[2], data[0], data[1]]);
	});

	it("should sort by multiple properties", () => {
		const data = [
			{ foo: 2, bar: 3 },
			{ foo: 2, bar: 2 },
			{ foo: 3, bar: 1 },
			{ foo: 1, bar: 3 },
		];
		expect(orderBy(data, ["foo", "bar"])).toEqual([
			data[3],
			data[1],
			data[0],
			data[2],
		]);
	});

	it("should sort multiple properties in specified order", () => {
		const data = [
			{ foo: 2, bar: 3 },
			{ foo: 2, bar: 2 },
			{ foo: 3, bar: 1 },
			{ foo: 1, bar: 3 },
		];
		expect(orderBy(data, ["foo", "bar"], ["asc", "desc"])).toEqual([
			data[3],
			data[0],
			data[1],
			data[2],
		]);
	});
});
