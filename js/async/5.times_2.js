var http = require('http'),
        async = require('async');

var options = {
      hostname: process.argv[2],
          port: parseInt( process.argv[3], 10  ),
              path: "/users/create",
                  method: "POST"

};

async.times(5, function( n, next  ) {
  var req = http.request(options, function(res) {
            res.on('data', function () {});
            res.on('end', function( err  ) {
                          next( err, null  );

            } );

  });
      req.write( JSON.stringify({user_id: n + 1})  );
          req.end();

}, function(err, results) {
  if ( err  ) {
            return console.error( err  );

  }
      options.path = "/users";
          options.method = "GET";

          var req = http.request(options, function(res) {
                    var body = '';
                    res.on('data', function (chunk) {
                                  body += chunk.toString();

                    });
                    res.on('end', function() {
                                  console.log( body  );

                    });

          });
              req.end();

});
