"use strict";
var foo = require("foo");
var bar = require("bar").__default__;

var baz = "baz";
var qux = "qux";

exports.__default__ = baz;
exports.qux = qux;
