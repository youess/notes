

function foo() {           // can't access inner function variable
  var bar;
  function zip() {         // inner function can access outer variable
    var quux;
  }
}
