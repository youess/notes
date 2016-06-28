
var http = require('http'),
    async = require('async'),
    hostname = process.argv[2],
    port = Number(process.argv[3]),
    url = 'http://' +  hostname + ':' + port;

function createUser(id, cb) {

  var postdata = JSON.stringify({ "user_id": id });
  var opts = {
    "hostname": hostname,
    "port": port,
    "method": "POST",
    "path": "/users/create",
    "headers": {
      "Content-Length": postdata.length
    }
  };

  var req = http.request(opts, function(res) {
    res.on("data", function(chunk) {});
    res.on("end", cb);
  });
  req.on("error", cb);

  req.write(postdata);
  req.end();

}

async.series({

    "post": function(cb) {
      async.times(5, function(n, cb) {
        createUser(n + 1, function(err) {
          cb(err);
        })
      }, function(err) {
        if (err) return cb(err);
        cb(null, "saved");
      })
    },

    "get": function(cb) {
      http.get(url + '/users', function(res) {
        var body = "";
        res.on("data", function(chunk) {
          body += chunk.toString();
        });
        res.on("end", function() {
          cb(null, body);
        })
      }).on("error", cb);
    }

    }, function(err, results) {
      if (err) return console.error(err);
      console.log(results.get);
    });
