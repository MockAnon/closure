function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var index = -1;
  return function() {
    /* your code here */
    index += 1;
    return list[index]
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());

var countdownGenerator = function (x) {
  var count = x;

  return function() {
  if(count > 0) {
    count--;
    return console.log("T-minus " + (count + 1) + "...");
  }
  if(count == 0){
    count--;
    return console.log("Blast Off!");
  }
  if(count < 0){
    return console.log("Rockets already gone, bub!");
    }
  }
  /* your code here */
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
