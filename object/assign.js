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

let twoObj = {};
Object.assign(twoObj, "ABC", {key1: undefined, key2: null});
console.log(twoObj);

let sports = {
    event: "축구",
    player: 11
};
let dup = Object.assign({}, sports);
console.log(dup.player);

sports.event = '수영';
console.log(dup.event);
console.log(sports.event);

dup.player = 33;
console.log(dup.player);
console.log(sports.player);