var inputValues = new String("String");

var outputStrings = [];
for (var i = 0, n = inputValues.length; i < n; ++i) {
    outputStrings.push(String(inputValues[i]));
}

console.log( outputStrings );