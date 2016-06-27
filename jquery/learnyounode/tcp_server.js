

var net = require("net")


var server = net.createServer(function(socket) {

  // format: "YYYY-MM-DD hh:mm"
  var now = new Date();
  var year = now.getFullYear(),
    month = now.getMonth() + 1,
    day = now.getDate(),
    hour = now.getHours(),
    minute = now.getMinutes();
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  var data = year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";
  socket.end(data);

});

server.listen(+process.argv[2]);
