import expect from "expect";
import { merge } from ".";

describe("merge", () => {
	it("should mutate first object", () => {
		const a = { foo: 123 };
		const b = { bar: "b" };
		expect(merge(a, b)).toStrictEqual(a);
	});

	it("should merge objects", () => {
		const a = { foo: 123 };
		const b = { bar: "b" };
		expect(merge(a, b)).toEqual({
			foo: 123,
			bar: "b",
		});
	});

	it("should deep merge objects", () => {
		const a = { foo: { bar: 123 } };
		const b = { foo: { bar: 123, baz: 123 } };
		expect(merge(a, b)).toEqual({
			foo: { bar: 123, baz: 123 },
		});
	});

	it("should overwrite properties", () => {
		const a = { foo: { bar: 123 } };
		const b = { foo: { bar: 222 } };
		expect(merge(a, b)).toEqual({
			foo: { bar: 222 },
		});
	});

	it("should merge multiple objects", () => {
		const a = { foo: { bar: 123 } };
		const b = { foo: { bar: 222 } };
		const c = { foo: { bar: 333 }, bob: 123 };
		expect(merge(a, b, c)).toEqual({
			foo: { bar: 333 },
			bob: 123,
		});
	});
});
