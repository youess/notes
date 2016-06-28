

var http = require("http"),
    async = require("async");


var requestBody = "",
    count = 0;

async.whilst(
    function () { return requestBody.trim() !== "meerkat"; },

    function(cb) {
      var body = "";
      http.get(process.argv[2], function(res) {
        res.on("data", function(chunk) {
          body += chunk.toString();
        });
        res.on("end", function() {
          requestBody = body;
          ++count;
          cb();
        });
      }).on("error", cb);
    },

    function(err) {
      if (err) return console.error(err);
      console.log(count);
    });
