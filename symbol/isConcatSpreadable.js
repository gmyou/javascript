let one = [11, 22], two = [21, 22];
two[Symbol.isConcatSpreadable] = false;
let result = one.concat(two);
console.log(result, result.length);
// [ 11, 22, [ 21, 22 ] ] 3

two[Symbol.isConcatSpreadable] = true;  // default
result = one.concat(two);
console.log(result, result.length);
// [ 11, 22, 21, 22 ] 4


// array-like
var x = [1, 2, 3];

var fakeArray = { 
  [Symbol.isConcatSpreadable]: true, 
  length: 2, 
  0: 'hello', 
  1: 'world' 
}

console.log( x.concat(fakeArray) ); // [1, 2, 3, "hello", "world"]

var y = [1, 2, 3];

var fakeArray2 = { 
  length: 2,
  0: 'hello', 
  1: 'world' 
}

console.log( y.concat(fakeArray2) ); // [ 1, 2, 3, { '0': 'hello', '1': 'world', length: 2 } ]