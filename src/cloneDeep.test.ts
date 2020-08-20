import expect from "expect";
import { cloneDeep } from ".";

describe("cloneDeep", () => {
	it("should work with primitives", () => {
		expect(cloneDeep(null)).toEqual(null);
		expect(cloneDeep(undefined)).toEqual(undefined);
		expect(cloneDeep(1)).toEqual(1);
		expect(cloneDeep("a")).toEqual("a");
		expect(cloneDeep(true)).toEqual(true);
		expect(cloneDeep(false)).toEqual(false);
	});

	it("should clone objects", () => {
		const obj = { foo: 123 };
		const clone = cloneDeep(obj);
		expect(clone).toEqual(obj);
		expect(clone).not.toBe(obj);
	});

	it("should clone nested objects", () => {
		const obj = { foo: { bar: 123 } };
		const clone = cloneDeep(obj);
		expect(clone).toEqual(obj);
		expect(clone).not.toBe(obj);
		expect(clone.foo).not.toBe(obj.foo);
	});

	it("should clone arrays", () => {
		const arr = [1, 2];
		const clone = cloneDeep(arr);
		expect(clone).toEqual(arr);
		expect(clone).not.toBe(arr);
	});

	it("should clone nested arrays", () => {
		const arr = [1, [2]];
		const clone = cloneDeep(arr);
		expect(clone).toEqual(arr);
		expect(clone).not.toBe(arr);
		expect(clone[1]).not.toBe(arr[1]);
	});

	it("should clone RegExp", () => {
		const regex = /foo/gm;
		const res = cloneDeep(regex);
		expect(res).toEqual(regex);
		expect(res).not.toBe(regex);
	});

	it("should clone Date", () => {
		const date = new Date();
		const res = cloneDeep(date);
		expect(res).toEqual(date);
		expect(res).not.toBe(date);
	});

	it("should clone Sets", () => {
		const obj = { a: 1 };
		const set = new Set([obj]);
		const res = cloneDeep(set);

		expect(res).toEqual(set);
		expect(res).not.toBe(set);

		expect(Array.from(res)[0]).not.toBe(obj);
	});

	it("should clone Maps", () => {
		const key = { key: 1 };
		const value = { value: 1 };
		const map = new Map([[key, value]]);
		const res = cloneDeep(map);
		expect(res).toEqual(map);
		expect(res).not.toBe(map);

		expect(Array.from(res.entries())[0][0]).toBe(key);
		expect(Array.from(res.entries())[0][1]).not.toBe(value);
	});
});
