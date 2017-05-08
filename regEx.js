var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);

var text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end';
var lines = text.split(/\r\n|\r|\n/);
console.log(lines); // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]

var text = `Some text
And some more
And yet
This is the end`;
var lines = text.split(/\r\n|\r|\n/);
console.log(lines); // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]

var s = 'Please yes\nmake my day!';
var res = s.match(/yes.*day/);
// Returns null
console.log(res);
res = s.match(/yes[^]*day/);
// Returns ["yes\nmake my day"]
console.log(res);

var str = '#foo#';
var regex = /foo/y;

regex.lastIndex = 1;
var stickyFlag = regex.test(str); // true
console.log(stickyFlag);
regex.lastIndex = 5;
stickyFlag = regex.test(str); // false (lastIndex is taken into account with sticky flag)
console.log(stickyFlag);
stickyFlag = regex.lastIndex; // 0 (reset after match failure)
console.log(stickyFlag);

var text = 'Образец text на русском языке';
var regex = /[\u0400-\u04FF]+/g;

var match = regex.exec(text);
console.log(match[0]);        // logs 'Образец'
console.log(regex.lastIndex); // logs '7'

var match2 = regex.exec(text);
console.log(match2[0]);       // logs 'на' [did not log 'text']
console.log(regex.lastIndex); // logs '15'

// and so on