console.log( Array.of(1) );         // [1]
console.log( Array.of(1, 2, 3) );   // [1, 2, 3]
console.log( Array.of(undefined) ); // [undefined]

//Polyfill
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}