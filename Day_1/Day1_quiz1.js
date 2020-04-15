function add(x) {
  var all = 0;
  for (x; x > 0; x--) {
    all = all + x;
  }
  return all;
}
var sum = add(5);
console.log("result", sum);
