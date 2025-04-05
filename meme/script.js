let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');

setInterval(() => {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let ampmText = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12; 
    hr.innerHTML = (hour < 10 ? "0" : "") + hour;
    min.innerHTML = (minute < 10 ? "0" : "") + minute;
    sec.innerHTML = (second < 10 ? "0" : "") + second;
    ampm.innerHTML = ampmText;
}, 1000);

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonth[today.getMonth()];
year.innerHTML = today.getFullYear();

const memeButton = document.querySelector(".but");
const memeImage = document.querySelector(".memeImg");
const memeTitle = document.querySelector(".memeTitle");
const memeAuthor = document.querySelector(".memeAuthor");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response)=>response.json())
    .then((data)=>{updateDetails(data.url,data.title,data.author)
    });
    };
    memeButton.addEventListener("click",generateMeme);
