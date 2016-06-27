
var fs = require("fs");
var path = require("path");

module.exports = function(dirname, exts, cb) {
  fs.readdir(dirname, function(err, files) {
    if (err) { return cb(err); }                 // 返回错误信息
    /* wrong way
    var filterFiles = files.forEach(function(f) {      // should use filter to avoid this
      if (path.extname(f) === '.' + exts) {
        return f;
      }
    });
    // console.log(filterFiles);
    return cb(null, filterFiles);               // 返回处理数据，并将错误置为null
    */
    var filterFiles = new Array();
    files.forEach(function(f) {
      if (path.extname(f) === '.' + exts) {
        filterFiles.push(f);
      }
    });
    cb(null, filterFiles);
  });
}
