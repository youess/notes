#!/usr/bin/env node


/*
 * Synchronous filesystem operation to read a file and print the number of newlines,
 * similar to `cat file | wc -l`
 */

var fs = require("fs");

var filePath = process.argv[2];

// read file into buffer object, buffer could be ascii, binary or some other in an effient way
var bufferFile = fs.readFileSync(filePath);

// var count = 0;
// for (var i = 0, len = bufferFile.length; i < len; i++) {
  // var line = bufferFile[i].toString();
  // console.log(line);
  // if (line.split("\n")[1] == "") {
    // count++;
  // }
// }
var text = bufferFile.toString();          // convert buffer into string
console.log(text.split("\n").length - 1);
