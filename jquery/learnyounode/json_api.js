

var http = require("http"),
    url = require("url");


http.createServer(function(req, res) {

  if (req.method !== "GET") {
    res.end("accept the GET method!");
  }


  var urlDict = url.parse(req.url, true),
    query = urlDict.query;
  // console.log(query);
  var json = {};

  if (urlDict.pathname === "/api/parsetime") {
    var theDate = new Date(query.iso);
    json.hour = theDate.getHours();
    json.minute = theDate.getMinutes();
    json.second = theDate.getSeconds();
    // res.end(JSON.stringify(json));
  }

  if (urlDict.pathname === "/api/unixtime") {
    var theDate = new Date(query.iso);
    json.unixtime = theDate.getTime();
  }
  if (json) {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(json));
  } else {
    res.writeHead(404);
    res.end();
  }

}).listen(+process.argv[2]);
