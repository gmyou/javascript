var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}

Array.prototype.foo = "foo!";
var array = ['a', 'b', 'c'];

for (var i in array) {
  console.log(array[i]);
}

var obj = {
  "a": 1,
  "b": 2,
  "c": 3
};

for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) { 
  // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...
    console.log("prop: " + prop + " value: " + obj[prop])
  }
}