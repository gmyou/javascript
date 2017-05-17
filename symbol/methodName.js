const symbolOne = Symbol("symbol one");
const symbolTwo = Symbol("symbol two");

class Sports {
    static [symbolOne]() {
        return "Symbol-1";
    }
    [symbolTwo]() { // non-static
        return "Symbol-2";
    }
}
console.log(Sports[symbolOne]());
// console.log(Sports[symbolTwo]()); // Error

let obj = new Sports();
// console.log(obj[symbolOne]()); // Error
console.log(obj[symbolTwo]());