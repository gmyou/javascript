let one = 1, two = 2;
function taggedFunction(text, value) {
    console.log("1-1:", text[0]);
    console.log("1-2:", typeof text[0]);
    console.log("2-1:", text[1]);
    console.log("2-2:", typeof text[1]);
    console.log("3:", value);
}
taggedFunction `1+2=${one + two}`;