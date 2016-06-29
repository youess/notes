

function foo() {
  var bar;
  quux = 0;
  function zip() {
    var quux = 1;
    bar = true;         // 这个由于返回方程中含有bar所以不会立即进入gc
  }
  return zip;
}
