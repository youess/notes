
var http = require("http"),
    async = require("async");


async.each(process.argv.slice(2), function(url, cb) {
  http.get(url, function(res) {
    res.on("data", function(chunk) {
    });
    res.on("end", function() {
      return cb();
    });
  }).on("error", function(err) {
    cb(err);
  });
}, function(err) {
  if (err) {
    console.log(err);
  }
});
