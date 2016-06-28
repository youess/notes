
var http = require("http"),
    async = require("async");


async.reduce(["one", "two", "three"], 0, function(memo, item, cb) {

  http.get(process.argv[2] + "?number=" + item, function(res) {
    // console.log("" + memo + " " + item);
    var body = '';
    res.on("data", function(chunk) {
      body += chunk.toString();
    });
    res.on("end", function() {
      console.log(body);
      cb(null, memo + Number(body));
    });
  }).on("error", cb);

}, function(err, result) {
  if (err) return console.error(err);
  console.log(result);
});
