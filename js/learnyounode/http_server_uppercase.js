

var http = require("http");
var map = require("through2-map");

http.createServer(function(req, res) {

  if (req.method !== "POST") {
    res.end("POST method only");
  }

  res.writeHead(200, {"content-type": "text/plain"});

  req.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);

}).listen(+process.argv[2]);
