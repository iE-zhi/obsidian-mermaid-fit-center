import { readFile } from "node:fs/promises";

const manifest = JSON.parse(await readFile("manifest.json", "utf8"));
const versions = JSON.parse(await readFile("versions.json", "utf8"));
const packageJson = JSON.parse(await readFile("package.json", "utf8"));

const requiredFields = [
	"id",
	"name",
	"version",
	"minAppVersion",
	"description",
	"author",
];

for (const field of requiredFields) {
	if (typeof manifest[field] !== "string" || manifest[field].trim() === "") {
		throw new Error(`manifest.json is missing a valid ${field}`);
	}
}

if (!/^[a-z0-9-]+$/.test(manifest.id)) {
	throw new Error("manifest id may contain only lowercase letters, numbers, and hyphens");
}

if (manifest.version !== packageJson.version) {
	throw new Error("manifest.json and package.json versions must match");
}

if (versions[manifest.version] !== manifest.minAppVersion) {
	throw new Error("versions.json must map the current version to minAppVersion");
}

console.log(`Validated ${manifest.id} ${manifest.version}`);
