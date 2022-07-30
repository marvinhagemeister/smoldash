/**
 * Check if a collection (Array, Map, Set, Object) is empty
 */
export function isEmpty(v: any) {
	if (Array.isArray(v)) {
		return v.length == 0;
	} else if (v instanceof Set || v instanceof Map) {
		return v.size == 0;
	} else if (v !== null && typeof v == "object") {
		return Object.keys(v).length == 0;
	}
	return true;
}

export function isNil(v: any) {
	return v === null || v === undefined;
}

export function isNumber(v: any) {
	return typeof v == "number";
}

export function isObject(v: any) {
	const type = typeof v;
	return v != null && (type == "object" || type == "function");
}

export function isUndefined(v: any) {
	return v === undefined;
}
