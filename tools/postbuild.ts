import { promises as fs } from "fs";
import path from "path";

async function run() {
	const esm = path.join(__dirname, "..", "dist", "esm");
	await fs.copyFile(path.join(esm, "index.js"), path.join(esm, "index.mjs"));
}

run();
