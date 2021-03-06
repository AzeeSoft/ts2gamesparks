#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts2gs = require("../lib");
var yargs = require("yargs");
var colors = require("colors/safe");
var options = yargs
    .option("init", { alias: "i" })
    .option("useRequireOnce", { boolean: true })
    .argv;
if (options.init) {
    ts2gs.init(process.cwd());
}
else {
    console.log();
    console.log("Initializing TS to Cloud Code Transpilation...");
    var builder = ts2gs.createBuilder(process.cwd(), options);
    if (builder.performDiagnosticChecks()) {
        builder.buildAllFiles();
        console.log();
        console.log(colors.green("TS to Cloud Code Transpilation Successful!"));
        console.log();
    }
}
