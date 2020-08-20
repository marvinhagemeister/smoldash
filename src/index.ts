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
export function at(source: Record<string, unknown> | any[], paths: string[]) {
	const out = [];
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
