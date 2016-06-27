

var http = require("http");
var bl = require("bl");

// catch is that print the url data order same as command line
//
var urls = process.argv.slice(2);
var count = 0;
var results = [];

function printList() {
  // results.forEach(function(us) {
    // console.log(us);
  // })
  for (var i = 0, len = results.length; i < len; i++) {
    console.log(results[i]);
  }
}


function httpGet(index) {

  http.get(urls[index], function(res) {

    res.setEncoding("utf8");

    res.pipe(bl(function(err, data) {
      if (err)
        return console.error(err);

      results[index] = data.toString();
      count++;

      if (count === 3) {
        printList();
      }
    }))

  });
}

for (var i = 0, len = urls.length; i < len; i++) {
  httpGet(i);
}

/*
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++)
          console.log(results[i])

}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
            if (err)
              return console.error(err)

            results[index] = data.toString()
            count++

            if (count == 3)
              printResults()

    }))

  })

}

for (var i = 0; i < 3; i++)
  httpGet(i)
*/
