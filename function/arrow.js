((x)=>{
    console.log(x*x);
})(3);


var number_list = [1, 2, 3, 4, 5];
number_list = number_list.filter(n => {
  return n % 2 === 0;
});
console.log(number_list);


// empty 화살표 함수는 undefined를 반환
let empty = () => {};

(() => "foobar")() // "foobar" 반환

var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// 쉬운 배열 필터링, 매핑, ...

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]

// 더 간결한 프로미스 체인
promise.then(a => {
  // ...
}).then(b => {
   // ...
});