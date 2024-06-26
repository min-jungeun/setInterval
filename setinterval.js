// let count = 0;
// const navidata = ["네이버", "다음", "구글", "아마존", "깃"];

// setInterval(function(){
//     console.log(navidata[count]);
//     count++;
//     count %= navidata.length; // count = count % 10;  -> 리턴
// }, 500)


//자바스크립트경로는 css와 다름. 자바스크립트가 연결된 html 기준으로 처리해야한다.
let count = 3;
setInterval(function(){
    count++;
    count %= 5;
    document.querySelector("#bannerimg").setAttribute("src",`/banner/${count}.png`)
}, 1000);



// $("#bannerimg").attr("src","/banner/1.png") -> 제이쿼리로 표현