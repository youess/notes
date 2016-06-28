#!/usr/bin/env node


/*
 * print a list files in a given directory
 */


var fs = require("fs");
var path = require("path");

var targetDir = process.argv[2];
var extName = '.' + process.argv[3];

fs.readdir(targetDir, function(err, filename) {
  if (err) { console.log(err); }
  for (var i = 0, len = filename.length; i < len; i++) {
    // var tmp = filename[i].split(".");
    // if (tmp[tmp.length - 1] === extName) {
      // console.log(filename[i]);
    // }
    if (path.extname(filename[i]) === extName) {
      console.log(filename[i]);
    }
  }
});
