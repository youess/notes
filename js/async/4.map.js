
var http = require("http"),
    async = require("async");

async.map(process.argv.slice(2),

    function(url, cb) {
      var body = "";
      http.get(url, function(res) {
        res.on("data", function(chunk) {
          body += chunk.toString();
        });
        res.on("end", function() {
          cb(null, body);
        });
      }).on("error", function(err) {
        cb(err);
      })
    },

    function(err, results) {
      if (err) return console.error(err);
      console.log(results);
    });
