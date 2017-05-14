var hello = 'Hello, ';
console.log(hello.concat('Kevin', ' have a nice day.'));
/* Hello, Kevin have a nice day. */

var greetList = ['Hello', ' ', 'Venkat', '!'];
console.log("".concat(...greetList)); // "Hello Venkat!"

console.log("".concat({})); // [object Object]
console.log("".concat([])); /// ""
console.log("".concat(null)); // "null"
console.log("".concat(true)); // "true"
console.log("".concat(4, 5)); // "45"
console.log("".concat({})); // [object Object]