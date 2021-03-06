"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("./test");
var fileName = "modules/module1.ts";
describe(fileName, function () {
    test_1.hasLines(fileName, "const foo = \"foo\"", [
        "var modules__module1 = (function () {",
        "var foo = \"foo\"",
        "return {}",
        "})();",
    ]);
    test_1.hasLines(fileName, "export const foo = \"foo\"; function bar() { return \"bar\"; };", [
        "var foo = \"foo\"",
        "function bar() { return \"bar\"; }",
        "return { foo: foo }",
    ]);
    test_1.hasLines(fileName, "export const foo = \"foo\"; export function bar() { return \"bar\"; };", [
        "var foo = \"foo\"",
        "function bar() { return \"bar\"; }",
        "return { foo: foo, bar: bar }",
    ]);
    test_1.hasLines(fileName, "import * as Module2 from \"module2\"; export const foo = Module2.foo;", [
        "requireOnce(\"module2\")",
        "var foo = modules__module2.foo",
        "return { foo: foo }",
    ]);
    test_1.hasLines(fileName, "export enum Rarity { Copper = 0, Silver = 1, Gold = 2 }", [
        "var Rarity; (function (Rarity) { ",
        "return { Rarity: Rarity }",
    ]);
});
