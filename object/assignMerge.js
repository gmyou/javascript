let oneObj = {one: 1}, twoObj = {two: 2};
let mergeObj = Object.assign(oneObj, twoObj);

console.log(oneObj);
console.log(twoObj);
console.log(mergeObj);

console.log(Object.is(oneObj, mergeObj));

// 연동
mergeObj.one = 3;
console.log(oneObj);
console.log(mergeObj);

console.log(Object.is(oneObj, mergeObj));


var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 타겟 오브젝트, 그 자체도 변화합니다

o1.a = 4;
console.log(obj);
console.log(o1);