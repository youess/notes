
var http = require("http");
var bl = require("bl");

// collect all data from the server

/* using third party package
http.get(process.argv[2], function(res) {
  res.setEncoding("utf8");
  res.on("error", console.error);
  res.pipe(bl(function(err, data) {
    if (err) { console.error(data); }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
*/

http.get(process.argv[2], function(res) {
  res.setEncoding("utf8");
  var str = '';
  res.on("data", function(data) {
    // str.push(data);
    str += data;
  })
  res.on("error", console.error);
  res.on("end", function() {
    console.log(str.length);
    console.log(str);
  })
});
