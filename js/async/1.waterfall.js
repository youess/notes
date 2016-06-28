


var http = require("http"),
    async = require("async"),
    fs = require("fs");


async.waterfall([
    // 需要执行的异步方法集合
    function(cb) {
      fs.readFile(process.argv[2], 'utf8', function(err, url) {
        if (err) {
          return console.error(err);
        }
        cb(null, url);
      });
    },

    function(url, cb) {
      var body = '';
      http.get(url, function(res) {
        res.on("data", function(chunk) {
          body += chunk.toString();
        });
        res.on("end", function() {
          cb(null, body)
        })
      }).on("error", function(err) {
        cb(err);
      });
    }

    ], function(err, data) {
      if (err) {
        return console.error(err);
      }
      console.log(data);
    });
