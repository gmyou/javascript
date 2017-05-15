// 하나의 d와 하나 이상의 b에 하나의 d가 뒤따라 일치해야 합니다.
// 일치한 b와 다음 d를 기억하십시오.
// 대소문자 구분은 무시됩니다.

var myRe = /d(b+)(d)/i;
var myArray = myRe.exec('cdbBdbsbz');
console.log(myArray);

// test
var str = "hello world!";
var result = /^hello/.test(str);
console.log(result); // true

// match
var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);
// [ 'see Chapter 3.4.5.1',
//   'Chapter 3.4.5.1',
//   '.1',
//   index: 22,
//   input: 'For more information, see Chapter 3.4.5.1' ]

// search
function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' contains ';
  } else {
    midstring = ' does not contain ';
  }
  console.log(str + midstring + re);
}

// replace
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.

var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John

// split
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

var space = ' ';
var comma = ',';

splitString(tempestString, space);
// The original string is: "Oh brave new world that has such people in it."
// The separator is: " "
// The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it.
splitString(tempestString);
// The original string is: "Oh brave new world that has such people in it."
// The separator is: "undefined"
// The array has 1 elements: Oh brave new world that has such people in it.
splitString(monthString, comma);
// The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
// The separator is: ","
// The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec