function* sports(one){
    let two = yield one;
    let param = yield two + one;
    yield param + one;
}
let generatorObj = sports(10);

console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next(20));


function* foo(){
  var index = 0;
  while (index <= 2) // when index reaches 3, 
                     // yield's done will be true 
                     // and its value will be undefined;
    yield index++;
}

var iterator = foo();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }