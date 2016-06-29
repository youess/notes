

function foo() {
  var bar = 0;
  quux = 0;
  function zip() {
    var quux = 1;          // 同名的变量，称之为shadowing, 不能使用外部的变量了。
  }
}
