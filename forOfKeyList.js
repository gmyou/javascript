const o = {naver:70, google:20, daum:10};
let keyList = Object.keys(o);
for( key of keyList ) {
    console.log(key, o[key]);
}