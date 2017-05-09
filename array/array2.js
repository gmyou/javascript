var promise = {
  'var'  : 'text',
  'array': [1, 2, 3, 4]
};

console.log(promise['array']);

var fruits = [];
fruits.push('banana', 'apple', 'peach');

console.log(fruits.length);


fruits[5] = 'mango';
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
console.log(fruits.length); // 6
console.log(fruits);

fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits);

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
console.log(fruits);