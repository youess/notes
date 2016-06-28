
var lsf = require("./module_fun.js");

lsf(process.argv[2], process.argv[3], function(err, data) {
  if (err) { console.log(err); }
  // console.log(data)
  data.forEach(
    function(f) {
      console.log(f);
    }
    );
});
