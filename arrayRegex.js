// 하나의 d와 하나 이상의 b에 하나의 d가 뒤따라 일치해야 합니다.
// 일치한 b와 다음 d를 기억하십시오.
// 대소문자 구분은 무시됩니다.

var myRe = /d(b+)(d)/i;
var myArray = myRe.exec('cdbBdbsbz');
console.log(myArray);