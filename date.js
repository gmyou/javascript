var today = new Date();
console.log(today);
var birthday = new Date("December 17, 1995 03:24:00");
console.log(birthday);
var birthday = new Date(95,11,17);
console.log(birthday);
var birthday = new Date(95,11,17,3,24,0);
console.log(birthday);

timeA = new Date();
// 여기에 어떤 동작을 하는 코드를 넣으세요.
var doSomethingForALongTime = () => {
    setTimeout(()=>{}, 3000);
};
doSomethingForALongTime();
timeB = new Date();
timeDifference = timeB - timeA;
console.log(timeDifference);

// 객체가 있다면
var start = new Date();

// 시간때우기용 이벤트를 이곳에 넣어둡니다:
doSomethingForALongTime();
var end = new Date();
var elapsed = end.getTime() - start.getTime(); // 밀리초(seconds) 단위의 시간
console.log(elapsed);