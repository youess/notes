

var http = require("http");

var url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding("utf8");
  // res.on("data", console.log);
  res.on("data", function(data) {
    console.log(data);
  })
  res.on("error", console.error);
}).on("error", function(e) {
  console.log("Got error: " + e.message);
});

// req.write("hello world!\n");
// req.end();
