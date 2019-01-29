const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date()
let hr= date.getHours();
let min = date.getMinutes();
let sec= date.getSeconds();

let hrPosition= hr*360/12;
// let hrPosition= (hr*360/12) + (min*(360/60)/12);  fancy way
let minPosition= min*360/60;
// let minPosition= (min*360/60)+ (sec*(360/60)/60);    fancy way
let secPosition = sec*360/60;

function runTheTime(){

    secPosition = secPosition+ 6;
    minPosition= minPosition+(1/60)*6;
    hrPosition= hrPosition+(3/360);


    HOURHAND.style.tranform= "rotate("+ hrPosition+ "deg)";
    MINUTEHAND.style.tranform= "rotate("+ minPosition+ "deg)";
    SECONDHAND.style.tranform= "rotate("+ secPosition+ "deg)";
}
var time = setInterval(runTheTime, 1000)