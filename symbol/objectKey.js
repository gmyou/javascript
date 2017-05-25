let sym = Symbol("123");
let obj = {[sym]: "456"};
console.log(obj);
console.log(obj[sym]);
console.log(obj.sym);

obj = {nine: 999};
obj[Symbol("one")] = 111;
obj[Symbol("two")] = 222;
console.log(obj);
// console.log(obj.getOwnPropertySymbols());

for (var key in obj) {
    console.log(key);
}