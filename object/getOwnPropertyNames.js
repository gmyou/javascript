var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); 

// Array-like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort()); 

// Logging property names and values using Array.forEach
Object.getOwnPropertyNames(obj).forEach(
  function (val, idx, array) {
    console.log(val + ' -> ' + obj[val]);
  }
);

// non-enumerable property
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort()); 
