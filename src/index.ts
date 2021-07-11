/**
 * Sort objects by object properties
 */
export function sortBy<T>(arr: T[], keys: Array<keyof T>): T[] {
	return arr.slice().sort((a, b) => {
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			if (a[key] < b[key]) return -1;
			else if (a[key] > b[key]) return 1;
		}

		return 0;
	});
}

/**
 * Take out the first N items of an array
 */
export function take<T>(arr: T[], n: number): T[] {
	return arr.slice(0, n);
}

/**
 * Get the first element of an array
 */
export function head<T>(arr: T[]): T | undefined {
	return arr[0];
}

/**
 * Get multiple object or array value by paths. Example path: `a[0].b.c`
 */
export function at(
	source: Record<string, unknown> | any[],
	paths: string[] | string,
) {
	const out = [];

	if (typeof paths === "string") {
		paths = [paths];
	}

	for (let i = 0; i < paths.length; i++) {
		const path = paths[i];
		const parts = path.split(/[.[\]]/g);
		let haystack: any = source;
		let found = true;
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			if (part === "") continue;
			if (!(part in haystack)) {
				found = false;
				break;
			}
			haystack = haystack[part];
		}

		if (found) {
			out.push(haystack);
		}
	}

	return out;
}

/**
 * Return item by path or default value if not present
 */
export function get<T = any>(
	source: Record<string, unknown> | any[],
	path: string | Array<string | number>,
	defaultValue?: T,
): T | undefined {
	if (Array.isArray(path)) {
		path = path.join(".");
	}

	const parts = path.split(/[.[\]]/g);
	let haystack: any = source;
	for (let i = 0; i < parts.length; i++) {
		const part = parts[i];
		if (part === "") continue;
		if (!(part in haystack)) return defaultValue;
		haystack = haystack[part];
	}

	return haystack;
}

/**
 * Check if an item is in an object by path
 */
export function has(
	source: Record<string, unknown> | any[],
	path: string | Array<string | number>,
) {
	const empty = "__tlodash_not_found";
	return get(source, path, empty) !== empty;
}

/**
 * Check if a collection (Array, Map, Set, Object) is empty
 */
export function isEmpty(v: any) {
	if (Array.isArray(v)) {
		return v.length === 0;
	} else if (v instanceof Set || v instanceof Map) {
		return v.size === 0;
	} else if (v !== null && typeof v === "object") {
		return Object.keys(v).length === 0;
	}

	return true;
}

/**
 * Pick values out of an object by predicate and return them in a new object
 */
export function pickBy<T extends Record<string, unknown>>(
	obj: T,
	predicate: <K extends keyof T>(value: T[K], key: K) => boolean,
) {
	const out: Partial<T> = {};
	Object.keys(obj).forEach(key => {
		if (predicate((obj as any)[key], key)) {
			(out as any)[key] = obj[key];
		}
	});

	return out;
}

/**
 * Loop over a collection and call the callback on each item
 */
export function forEach<T>(
	value: T,
	callback: (value: any, index: number | string, collection: T) => void,
) {
	if (Array.isArray(value)) {
		value.forEach(callback as any);
	} else if (value instanceof Set || value instanceof Map) {
		value.forEach(callback as any);
	} else if (value !== null && typeof value === "object") {
		Object.keys(value).forEach(key => {
			callback((value as any)[key], key, value);
		});
	}
}

/**
 * Convert string to kebab case
 */
export function kebabCase(input: string) {
	let out = input
		.replace(/[-._\s]+/g, "-")
		.replace(/[A-Z0-9]/, "-$&")
		.replace(/[-]{2,}/, "");

	if (out[0] === "-") {
		out = out.slice(1);
	}
	if (out[out.length - 1] === "-") {
		out = out.slice(0, -1);
	}
	return out.toLowerCase();
}

/**
 * Get index of an item in an array
 */
export function indexOf<T>(arr: T[], value: T, startIndex = 0) {
	if (startIndex === 0) return arr.indexOf(value);

	for (let i = startIndex; i < arr.length; i++) {
		if (arr[i] === value) return i;
	}
	return -1;
}

/**
 * Flatten an array by a single level
 */
export function flatten(arr: any[]): any[] {
	return arr.reduce((acc, val) => acc.concat(val), []);
}

/**
 * Remove falsy values from array
 */
export function compact(arr: unknown[]) {
	return arr.filter(x => !!x);
}

/** Used to generate unique IDs. */
const idCounter: Record<string, number> = {};

/**
 * Generates a unique ID
 */
export function uniqueId(prefix = "$smoldash$") {
	const id = (idCounter[prefix] = (idCounter[prefix] || 0) + 1);
	return "" + (prefix === "$smoldash$" ? "" : prefix) + id;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function once<T extends (...args: any[]) => any>(fn: T): T {
	let result: ReturnType<T>;
	let called = false;
	return function once_wrapped(this: any, ...args: any[]) {
		if (!called) {
			called = true;
			result = fn.apply(this, args);
		}
		return result;
	} as any;
}

/**
 * Create a duplicate free version of an array
 */
export function uniq<T>(arr: T[]): T[] {
	if (!Array.isArray(arr)) return [];
	return Array.from(new Set(arr).values());
}

/**
 * Create a duplicate free version of an array by a user iteratee
 */
export function uniqBy<T, R = any>(arr: T[], iteratee: R | ((v: T) => R)) {
	if (!Array.isArray(arr)) return [];
	const seen = new Map<R, T>();
	const type = typeof iteratee;

	arr.forEach(item => {
		let key: any = iteratee;
		if (type === "string" && item !== null && typeof item === "object") {
			key = (item as any)[iteratee];
		} else if (type === "function") {
			key = (iteratee as any)(item);
		}
		if (!seen.has(key)) {
			seen.set(key, item);
		}
	});

	return Array.from(seen.values());
}

export type AnyFunction = (...args: any[]) => any;

/**
 * Pass the result of the first function to the next one.
 */
export function flow(...fns: AnyFunction[]) {
	return function (this: any, ...args: any[]) {
		let result = fns[0].apply(this, args);
		for (let i = 1; i < fns.length; i++) {
			result = fns[i].call(this, result);
		}

		return result;
	};
}

/**
 * Shallow clone of a value
 */
export function clone<T>(value: T): T {
	if (Array.isArray(value)) {
		return value.slice() as any;
	} else if (value instanceof RegExp) {
		return new RegExp(value.source, value.flags) as any;
	} else if (value instanceof Set) {
		return new Set(value) as any;
	} else if (value instanceof Map) {
		return new Map(value) as any;
	} else if (value instanceof Date) {
		return new Date(value) as any;
	} else if (typeof value === "object" && value !== null) {
		return { ...value };
	}
	return value;
}

/**
 * Deeply clone a value
 */
export function cloneDeep<T>(value: T): T {
	if (Array.isArray(value)) {
		return value.slice().map(cloneDeep) as any;
	} else if (value instanceof RegExp) {
		return new RegExp(value.source, value.flags) as any;
	} else if (value instanceof Set) {
		const out = new Set();
		value.forEach(v => out.add(cloneDeep(v)));
		return out as any;
	} else if (value instanceof Map) {
		const out = new Map();
		value.forEach((v, k) => out.set(k, cloneDeep(v)));
		return out as any;
	} else if (value instanceof Date) {
		return new Date(value) as any;
	} else if (typeof value === "object" && value !== null) {
		const out: Record<string, any> = {};
		for (const k in value) {
			out[k] = cloneDeep(value[k]);
		}
		return out as any;
	}

	return value;
}

/**
 * Deeply merge multiple objects
 */
export function merge(...objs: Record<string, any>[]): Record<string, any> {
	const a = objs[0] as any;

	for (let i = 1; i < objs.length; i++) {
		const b = objs[i] as any;

		for (const k in b) {
			if (
				a[k] !== null &&
				b[k] !== null &&
				typeof a[k] === "object" &&
				typeof b[k] === "object"
			) {
				merge(a[k], b[k]);
			} else {
				a[k] = b[k];
			}
		}
	}

	return objs[0];
}

const createPredicate = <T>(
	predicate:
		| string
		| [string, any]
		| Record<string, any>
		| ((item: T) => boolean) = x => !!x,
): ((item: T) => boolean) | undefined => {
	let fn;
	if (typeof predicate === "string") {
		fn = (item: T) => !!(item as any)[predicate];
	} else if (Array.isArray(predicate)) {
		fn = (item: T) => (item as any)[predicate[0]] === predicate[1];
	} else if (typeof predicate === "object") {
		fn = (item: T) => {
			return Object.keys(predicate).every(
				v => !(v in predicate) || (item as any)[v] === predicate[v],
			);
		};
	} else if (typeof predicate === "function") {
		fn = predicate;
	}
	return fn;
};

/**
 * Iterate the collection and return the index of the element where the predicate returns true
 */
export function findIndex<T>(
	collection: T[],
	predicate:
		| string
		| [string, any]
		| Record<string, any>
		| ((item: T) => boolean) = x => !!x,
	fromIndex = 0,
): number {
	if (!Array.isArray(collection)) return -1;
	const fn = createPredicate(predicate);
	for (let i = fromIndex; i < collection.length; i++) {
		if ((fn as any)(collection[i], i, collection)) {
			return i;
		}
	}
	return -1;
}

/**
 * Iterate the collection and return the element where the predicate returns true
 */
export function find<T>(
	collection: T[],
	predicate:
		| string
		| [string, any]
		| Record<string, any>
		| ((item: T) => boolean) = x => !!x,
	fromIndex = 0,
): T | undefined {
	const index = findIndex(collection, predicate, fromIndex);
	return index < 0 ? undefined : collection[index];
}

/**
 * Iterate the collection and return the elements where the predicate returns true
 */
export function filter<T>(
	collection: T[],
	predicate:
		| string
		| [string, any]
		| Record<string, any>
		| ((item: T) => boolean) = x => !!x,
): T[] {
	if (!Array.isArray(collection)) return [];
	return collection.filter(createPredicate(predicate) as any);
}

/**
 * Iterate the collection and return true if predicate returns true for at least one element
 */
export function some<T>(
	collection: T[],
	predicate:
		| string
		| [string, any]
		| Record<string, any>
		| ((item: T) => boolean) = x => !!x,
): boolean {
	return findIndex(collection, predicate) > -1;
}

/**
 * Iterate the collection and return true if predicate returns true for all elements
 */
export function every<T>(
	collection: T[],
	predicate:
		| string
		| [string, any]
		| Record<string, any>
		| ((item: T) => boolean) = x => !!x,
): boolean {
	const fn = createPredicate(predicate);
	// if we find one element which does not satisfy predicate, then return false
	return findIndex(collection, item => !(fn as any)(item)) < 0;
}

/**
 * Returns new collection with each element as result of it being called on iteratee function
 */

// overloaded signatures
export function map<T, K extends keyof T>(collection: T[], iteratee: K): T[K][];
export function map<T, Out>(
	collection: T[],
	iteratee?: (item: T, index: number, collection: T[]) => Out,
): Out[];

export function map<T, Out>(
	collection: T[],
	iteratee: string | ((item: T, index: number, collection: T[]) => Out) = x =>
		(x as unknown) as Out,
): Out[] {
	if (!Array.isArray(collection)) return [];

	let fn;
	if (typeof iteratee === "string") {
		fn = (item: T) => item[iteratee as keyof T];
	} else if (typeof iteratee === "function") {
		fn = iteratee;
	}
	return collection.map(fn as any);
}

/**
 * Shallowly compare to values
 */
export function isEqual<T>(a: T, b: T): boolean {
	if (a === null || b === null) {
		return a === b;
	} else if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) {
			return false;
		}

		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) {
				return false;
			}
		}

		return true;
	} else if (a instanceof RegExp && b instanceof RegExp) {
		return "" + a === "" + b;
	} else if (a instanceof Set && b instanceof Set) {
		if (a.size !== b.size) return false;

		for (const v of a.values()) {
			if (!b.has(v)) return false;
		}
		return true;
	} else if (a instanceof Map && b instanceof Map) {
		if (a.size !== b.size) return false;

		for (const [k, v] of a.entries()) {
			if (!b.has(k)) return false;
			if (b.get(k) !== v) return false;
		}
		return true;
	} else if (a instanceof Date && b instanceof Date) {
		return +a === +b;
	} else if (typeof a === "object" && typeof b === "object") {
		for (const i in a) if (!(i in b)) return false;
		for (const i in b) if (a[i] !== b[i]) return false;
		return true;
	}

	return a === b;
}

/**
 * Generate a range of numbers
 */
export function range(start: number, end?: number, step = 1) {
	if (typeof end === "undefined") {
		end = start;
		start = 0;
	}
	const result = [];
	for (let i = start; i < end; i += step) {
		result.push(i);
	}
	return result;
}

/**
 * Creates object to items in collection using keys from iteratee
 */
export function keyBy<T, K extends keyof T, MapKey extends string | number>(
	collection: T[],
	iteratee: K | ((item: T, index: number, collection: T[]) => MapKey),
): { [key in MapKey]: T } {
	if (!Array.isArray(collection)) return {} as { [key in MapKey]: T };

	let fn: (item: T, index: number, collection: T[]) => MapKey;
	if (typeof iteratee === "string") {
		fn = (item: T) =>
			(item[(iteratee as unknown) as keyof T] as unknown) as MapKey;
	} else if (typeof iteratee === "function") {
		fn = iteratee;
	}
	return collection.reduce((accumulator, item, index) => {
		const key = fn(item, index, collection);
		accumulator[key] = item;
		return accumulator;
	}, {} as { [key in MapKey]: T });
}

/**
 * Creates object to items in collection using keys from iteratee
 */
export function groupBy<T, K extends keyof T, MapKey extends string | number>(
	collection: T[],
	iteratee: K | ((item: T, index: number, collection: T[]) => MapKey),
): { [key in MapKey]: T[] } {
	if (!Array.isArray(collection)) return {} as { [key in MapKey]: T[] };

	let fn: (item: T, index: number, collection: T[]) => MapKey;
	if (typeof iteratee === "string") {
		fn = (item: T) =>
			(item[(iteratee as unknown) as keyof T] as unknown) as MapKey;
	} else if (typeof iteratee === "function") {
		fn = iteratee;
	}
	return collection.reduce((accumulator, item, index) => {
		const key = fn(item, index, collection);
		if (!accumulator[key]) accumulator[key] = [];
		accumulator[key].push(item);
		return accumulator;
	}, {} as { [key in MapKey]: T[] });
}
