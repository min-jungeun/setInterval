let count = 0;
const navidata = ["네이버", "다음", "구글", "아마존", "깃"];

setInterval(function(){
    console.log(navidata[count]);
    count++;
    count %= navidata.length; // count = count % 10;  -> 리턴
}, 500)