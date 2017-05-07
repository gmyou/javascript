// 두 인수를 취하고 그 둘의 합을 반환하는 함수 생성
var adder = new Function('a', 'b', 'return a + b');

// 함수 호출
console.log( adder(2, 6) );