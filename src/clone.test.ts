import expect from "expect";
import { clone } from ".";

describe("clone", () => {
	it("should work with primitives", () => {
		expect(clone(null)).toEqual(null);
		expect(clone(undefined)).toEqual(undefined);
		expect(clone(1)).toEqual(1);
		expect(clone("a")).toEqual("a");
		expect(clone(true)).toEqual(true);
		expect(clone(false)).toEqual(false);
	});

	it("should clone objects", () => {
		const obj = { foo: 123 };
		const res = clone(obj);
		expect(res).toEqual(obj);
		expect(res).not.toBe(obj);
	});

	it("should clone nested objects", () => {
		const obj = { foo: { bar: 123 } };
		const res = clone(obj);
		expect(res).toEqual(obj);
		expect(res).not.toBe(obj);
		expect(res.foo).toBe(obj.foo);
	});

	it("should clone arrays", () => {
		const arr = [1, 2];
		const res = clone(arr);
		expect(res).toEqual(arr);
		expect(res).not.toBe(arr);
	});

	it("should clone nested arrays", () => {
		const arr = [1, [2]];
		const res = clone(arr);
		expect(res).toEqual(arr);
		expect(res).not.toBe(arr);
		expect(res[1]).toBe(arr[1]);
	});

	it("should clone RegExp", () => {
		const regex = /foo/gm;
		const res = clone(regex);
		expect(res).toEqual(regex);
		expect(res).not.toBe(regex);
	});

	it("should clone Date", () => {
		const date = new Date();
		const res = clone(date);
		expect(res).toEqual(date);
		expect(res).not.toBe(date);
	});

	it("should clone Sets", () => {
		const obj = { a: 1 };
		const set = new Set([obj]);
		const res = clone(set);
		expect(res).toEqual(set);
		expect(res).not.toBe(set);
		expect(Array.from(res)[0]).toBe(obj);
	});

	it("should clone Maps", () => {
		const key = { key: 1 };
		const value = { value: 1 };
		const map = new Map([[key, value]]);
		const res = clone(map);
		expect(res).toEqual(map);
		expect(res).not.toBe(map);

		expect(Array.from(res.entries())[0][0]).toBe(key);
		expect(Array.from(res.entries())[0][1]).toBe(value);
	});
});
