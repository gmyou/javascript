function* sports(one, two) {
    console.log( "함수 블럭" );
    yield one + two;
};
console.log( typeof sports );

let getObj = sports(1, 2);
console.log( typeof getObj );