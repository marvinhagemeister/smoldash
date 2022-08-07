/**
 * Convert string to camel case
 */
export function camelCase(val: string) {
	return String(val)
		.replace(/[^\p{L}\p{Nd}]+/gu, " ") // replace non-alphanumeric characters
		.replace(/(\p{Lu}\p{Ll})/gu, " $1") // e.g. "Ab" -> " Ab"
		.replace(/ \p{Ll}/gu, m => m.toUpperCase()) // e.g. " a" -> " A"
		.replace(/(\p{Lu})(\p{Lu}+)/gu, (m, g1, g2) => `${g1}${g2.toLowerCase()}`) // e.g HTML -> Html
		.replace(/^[ ]*\p{Lu}+/u, m => m.toLowerCase()) // downcase the first set of capital letters
		.replace(/ /g, "");
}

/**
 * Convert string to snake case
 */
export function snakeCase(val: string) {
	return String(val)
		.replace(/[^\p{L}\p{Nd}]+/gu, " ") // replace non-alphanumeric characters
		.trim()
		.replace(/(\p{Ll})(\p{Lu}+)/gu, m => m.split("").join("_")) // e.g. aBC => a_B_C
		.replace(/(\p{L})(\p{Nd})/gu, "$1_$2") // e.g. s1 => s_1
		.replace(/ /g, "_")
		.replace(/[^_\p{L}\p{Nd}]/gu, "") // remove non-alphanumeric + _ characters
		.toLowerCase();
}

/**
 * Convert string to kebab case
 */
export function kebabCase(input: string) {
	return String(input)
		.replace(/[^\p{L}\p{Nd}]+/gu, "-") // replace non-alphanumeric characters
		.replace(/(\p{Lu}\p{Ll})/gu, "-$1") // e.g. Ab -> -Ab
		.replace(/(\p{Ll}\p{Lu}|\p{L}\p{Nd}|\p{Nd}\p{L})/gu, m =>
			m.split("").join("-"),
		) // e.g. aB -> a-B or A1 -> A-1 or 1A -> 1-A
		.replace(/[-]{2,}/g, "-")
		.replace(/(^-|-$)/g, "")
		.toLowerCase();
}

/**
 * Convert camel or snake cased string to start case
 */
export function startCase(val: string) {
	return (
		String(val)
			.replace(/[^\p{L}\p{Nd}]+/gu, " ") // replace non-alphanumeric characters
			.replace(/(\p{Lu}\p{Ll})/gu, " $1") // e.g. "Ab" -> " Ab"
			.replace(/(\p{Ll}\p{Lu}|\p{L}\p{Nd}|\p{Nd}\p{L})/gu, m =>
				m.split("").join(" "),
			) // e.g. "aB" -> "a B" or "A1" -> "A 1" or "1A" -> "1 A"
			// .replace(/[^ ][A-Z]+/g, m => m.split('').join(' '))
			.replace(/(^| )[^ ]/g, m => m.toUpperCase())
			.replace(/[ ]{2,}/g, " ")
			.trim()
	);
}
