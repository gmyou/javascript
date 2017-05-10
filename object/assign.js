try {
    let obj = Object.assign(null, {x: 1});
} catch (e) {
    console.log("null 지정 불가");
}
console.log(Object.assign(123));
console.log(Object.assign(456, 70));

console.log(Object.assign("ABC", {one: 1}));
console.log(Object.assign(Symbol("ABC"), {one: 1}));
try {
    let obj = Object.assign("ABC", "ONE");
} catch (e) {
    console.log("파라미터 모두 문자열 사용 불가");
}

let oneObj = {};
Object.assign(oneObj, "ABC", undefined, null);
console.log(oneObj);