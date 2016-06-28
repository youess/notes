

/*
 * Accepts one or more numbers as command-line arguments
 * and prints the sum of those numbers to the console
 */

// all string argv
// console.log(process.argv);


var res = 0;
for (var i = 2, len = process.argv.length; i < len; i++) {
  // res += +process.argv[i];        // convert string into numbers
  res += Number(process.argv[i]);        // convert string into numbers
}
console.log(res);
