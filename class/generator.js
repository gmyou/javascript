class Member {
    *gen() {
        yield 10;
        yield 20;
    }
};
let obj = new Member();
let getObj = obj.gen();

console.log(getObj.next());
console.log(getObj.next());