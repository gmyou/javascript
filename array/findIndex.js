function isBigEnough(element) {
  return element >= 15;
}

console.log( [12, 5, 8, 130, 44].findIndex(isBigEnough) ); // 3


function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2