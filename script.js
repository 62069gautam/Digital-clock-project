function updateClock(){

const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

const ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12;
hours = hours ? hours : 12;

hours = String(hours).padStart(2,"0");
minutes = String(minutes).padStart(2,"0");
seconds = String(seconds).padStart(2,"0");

const days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];

const months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];

document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

document.getElementById("ampm").textContent = ampm;

document.getElementById("day").textContent = days[now.getDay()];
document.getElementById("month").textContent = months[now.getMonth()];
document.getElementById("dateNum").textContent = now.getDate();
document.getElementById("year").textContent = now.getFullYear();

}

setInterval(updateClock,1000);

updateClock();