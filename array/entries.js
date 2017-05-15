var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

console.log(eArr.next().value); // [0, 'a']
console.log(eArr.next().value); // [1, 'b']
console.log(eArr.next().value); // [2, 'c']

let values = [10, 20, 30];
let iterator = values.entries();
// console.log( iterator.next() );

for (var [key, value] of iterator) {
    console.log( key, ":", value );
}