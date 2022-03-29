import expect from "expect";
import { mapValues } from ".";

describe("mapValues", () => {
	const users = {
		fred: { user: "fred", age: 40 },
		pebbles: { user: "pebbles", age: 1 },
	};

	it("should map values by function", () => {
		const result = mapValues(users, function (o) {
			return o.age;
		});
		expect(result).toEqual({ fred: 40, pebbles: 1 });
	});

	it("should map values by string", () => {
		const result = mapValues(users, "age");
		expect(result).toEqual({ fred: 40, pebbles: 1 });
	});
});
