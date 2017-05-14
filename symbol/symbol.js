var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

console.log(sym1);
console.log(sym2);
console.log(sym3);

console.log( Symbol("foo") === Symbol("foo") ); // false

// var sym = new Symbol(); // TypeError

var sym = Symbol("foo");
console.log( typeof sym );     // "symbol" 
var symObj = Object(sym);
// consoel.log( typeof symObj );  // "object"

console.log( typeof Symbol() === 'symbol' );
console.log( Symbol('foo') === 'symbol' );
console.log( Symbol.iterator === 'symbol' );

var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

// 키로 심볼을 사용한 속성들은 JSON.stringify() 을 사용할 때 완전히 무시된다:
for (var i in obj) {
   console.log(i); // logs "c" and "d"
}

console.log( JSON.stringify({[Symbol("foo")]: "foo"}) );
// '{}'

var sym = Symbol("foo");
var obj = {[sym]: 1};
console.log( obj[sym] );            // 1
console.log( obj[Object(sym)] );    // still 1

(function() {

    // module-scoped symbol
    var key = Symbol("description");

    function MyClass(privateData) {
      this[key] = privateData;
    }

    MyClass.prototype = {
      someFunc: function() {
        return "data: " + this[key];
      }
    };

    var c = new MyClass("private data")
    console.log(key);
    console.log(c["key"]);
    console.log(c.someFunc());

})();

// Output:
// undefined
// undefined
// data: private data