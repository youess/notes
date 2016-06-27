#!/usr/bin/env node


/*
 * async way to count file newlines number
 */

var fs = require("fs");

fs.readFile(process.argv[2], function(err, buffer) {
  if (err) { console.log(err); }
  console.log(buffer.toString().split("\n").length - 1);
});
