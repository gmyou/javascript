var keys = [];

with (Array.prototype) {
  keys.push('something');
}

Object.keys(Array.prototype[Symbol.unscopables]); 
// ["copyWithin", "entries", "fill", "find", "findIndex", "includes", "keys", "values"]

console.log( keys );


var obj = { 
  foo: 1, 
  bar: 2 
};

obj[Symbol.unscopables] = { 
  foo: false, 
  bar: true 
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}