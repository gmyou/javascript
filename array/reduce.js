let result = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
});

console.log(result);
// 10

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);

console.log(flattened);
// flattened is [0, 1, 2, 3, 4, 5]