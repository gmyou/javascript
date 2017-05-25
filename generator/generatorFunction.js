let GenConst = Object.getPrototypeOf(function*(){}).constructor;
let sports = new GenConst(
    "one", "two",
    "console.log('함수 블럭'); yield one + two"
);
let getObj = sports(3, 4);
console.log(getObj.next());
console.log(getObj.next());

// (function*(one, two){
//     console.log('함수 블럭');
//     yield one + two
// })