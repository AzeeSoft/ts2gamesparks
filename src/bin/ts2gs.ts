#!/usr/bin/env node
import * as ts2gs from "../lib";
import * as yargs from "yargs";

const options = yargs
	.option("init", { alias: "i" })
	.option("useRequireOnce", { boolean: true })
	.argv;

if (options.init) {
	ts2gs.init(process.cwd());
}
else {
	console.log();
	console.log("Initializing TS to Cloud Code Transpilation...");

	const builder = ts2gs.createBuilder(process.cwd(), options);
	builder.performDiagnosticChecks();
	builder.buildAllFiles();
}
