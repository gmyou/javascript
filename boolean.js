x = new Boolean(false);
if (x) {
  // . . . 이 코드는 실행된다.
  console.log('new Boolean(false)');
}

x = false;
if (x) {
  // . . . 이 코드는 실행되지 않는다.
  console.log('false');
}

var expression = true;
x = Boolean(expression);     // 추천
if (x) {
  console.log('Boolean');
}
x = new Boolean(expression); // 비추천
if (x) {
  console.log('new Boolean');
}

myFalse = new Boolean(false);   // false 값으로 초기화
g = new Boolean(myFalse);       // true 값으로 초기화
console.log(g);

// false 값으로 초기화한 Boolean 객체 만들기
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean("");
varbfalse = new Boolean(false);
console.log('bNoParam', bNoParam);
console.log('bZero', bZero);
console.log('bNull', bNull);
console.log('bEmptyString', bEmptyString);
console.log('varbfalse', varbfalse);

// true 값으로 초기화한 Boolean 객체 만들기
btrue = new Boolean(true);
btrueString = new Boolean("true");
bfalseString = new Boolean("false");
bSuLin = new Boolean("Su Lin");
console.log('btrue', btrue);
console.log('btrueString', btrueString);
console.log('bfalseString', bfalseString);
console.log('bSuLin', bSuLin);