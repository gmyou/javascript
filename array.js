var fruits = ['사과', '바나나'];
console.log( fruits.length );

var first = fruits[0];
console.log( first );

var last = fruits[fruits.length - 1];
console.log( last );

fruits.forEach(function (item, index, array) {
  console.log(item, index);
});

var newLength = fruits.push('오렌지');
console.log( newLength );
console.log( fruits );

var last = fruits.pop();
console.log( last );
console.log( fruits );

var first = fruits.shift();
console.log( first );
console.log( fruits );

var newLength = fruits.unshift('딸기');
console.log( newLength );
console.log( fruits );

fruits.push('망고');
console.log( fruits );

var pos = fruits.indexOf("바나나");
console.log( pos );

var removedItem = fruits.splice(pos, 1);
console.log( fruits );