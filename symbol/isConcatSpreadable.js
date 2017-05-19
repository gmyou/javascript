let one = [11, 22], two = [21, 22];
two[Symbol.isConcatSpreadable] = false;
let result = one.concat(two);
console.log(result, result.length);
// [ 11, 22, [ 21, 22 ] ] 3

two[Symbol.isConcatSpreadable] = true;  // default
result = one.concat(two);
console.log(result, result.length);
// [ 11, 22, 21, 22 ] 4