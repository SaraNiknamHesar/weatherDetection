let backgroundUrl = [
    "/assets/img/WallpaperGram.IR_1559405207_94506.jpg",
    "/assets/img/WallpaperGram.IR_1559405207_94506.jpg",
    "/assets/img/WallpaperGram.IR_1559405384_70189.jpg",
    "/assets/img/WallpaperGram.IR_1561321129_63537.jpg",
    "/assets/img/WallpaperGram.IR_1571517784_46575.jpg",
    "/assets/img/WallpaperGram.IR_1571646811_18972.jpg",
    "/assets/img/WallpaperGram.IR_1571646842_63704.jpg",
];
let cities = {
    tehran: { city: "tehran", temp: 12, weather: "sunny", humidity: 23, windSpeed: 32 },
    mashhad: { city: "mashhad", temp: 9, weather: "windy", humidity: 12, windSpeed: 44 },
    esfahan: { city: "shiraz", temp: 17, weather: "chill", humidity: 11, windSpeed: 43 },
    yazd: { city: "yazd", temp: 35, weather: "hot", humidity: 11, windSpeed: 16 },
    tabriz: { city: "tabriz", temp: -11, weather: "freezing", humidity: 0, windSpeed: 92 },
};

let btn = document.getElementById("search");
let searchBarInput = document.getElementsByClassName("search-bar")[0];
let $ = document;
// let cityElement = document.querySelector(".city");
// let tempElement = document.querySelector(".temp");
// let description = document.querySelector(".description");
// let humidity = document.querySelector(".humidity");
// let wind = document.querySelector(".wind");



let currentIndex = 0;
function changeBackground() {
    let bodyBackground = document.body.style.backgroundImage = `url("${backgroundUrl[currentIndex]}")`;
    currentIndex = (currentIndex += 1) % backgroundUrl.length;
}
setInterval(changeBackground, 5000);
changeBackground();

btn.addEventListener("click", (item) => {
    let searchBtnVal = searchBarInput.value;
    let mainCityDatas = cities[searchBtnVal];
    if (mainCityDatas) {
        $.querySelector(".city").innerHTML = `Weather In : ` + mainCityDatas.city;
        $.querySelector(".temp").innerHTML = mainCityDatas.temp + 'C';
        $.querySelector(".humidity").innerHTML = mainCityDatas.humidity;
        $.querySelector(".description").innerHTML = mainCityDatas.weather;
        $.querySelector(".wind").innerHTML = "Wind Speed: " + mainCityDatas.windSpeed;
        $.querySelector(".weather").classList.remove("loading");
    } else {
        console.log("error");

    }
});















