// let count = 0;
// const navidata = ["네이버", "다음", "구글", "아마존", "깃"];

// setInterval(function(){
//     console.log(navidata[count]);
//     count++;
//     count %= navidata.length; // count = count % 10;  -> 리턴
// }, 500)


//자바스크립트경로는 css와 다름. 자바스크립트가 연결된 html 기준으로 처리해야한다.
// let count = 3;
// setInterval(function(){
//     count++;
//     count %= 5;
//     document.querySelector("#bannerimg").setAttribute("src",`/banner/${count}.png`)
// }, 1000);

// $("#bannerimg").attr("src","/banner/1.png") -> 제이쿼리로 표현


const bannerdata = [
    "/banner2/benefit.png",
    "/banner2/1.png",
    "/banner2/event.png"
];

let num = 0;
document.querySelector("#bannerimg").setAttribute("src",bannerdata[num]) //화면이 열리자마자 바로 떠지는 것, 단 같은 변수를 사용해야함 [num]

document.querySelector(".bannerwrap").style.background = `url(${bannerdata[num]}) center no-repeat`;

     


const autoBanner = setInterval(function(){
    num++;
    num %= bannerdata.length;
    document.querySelector(".bannerwrap").style.background = `url(${bannerdata[num]}) center no-repeat`;
    document.querySelector("#bannerimg").setAttribute("src",bannerdata[num]) //1초 뒤에 터지는 것
    
}, 3000)



document.querySelector(".bannerwrap button").addEventListener('click', function(){
    clearInterval(autoBanner);
    this.innerHTML = "PLAY";
})