//Display current date & time
let currentDate = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let weekday = days[currentDate.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[currentDate.getMonth()];

let date = currentDate.getDate();

let year = currentDate.getFullYear();

let hour = currentDate.getHours();

let min = currentDate.getMinutes();
if (min < 10) {
  min = `0${min}`;
}

function formatDate() {
  return `${weekday} ${month} ${date} ${year} | ${hour}:${min}`;
}

document.querySelector("#todaysDate");
todaysDate.innerHTML = formatDate();

//NEED TO UPDATE DATE & TIME FOR DIFFERENT TIME ZONES??



//Search City
function citySearch(city) {
  let apiKey = '17ad6e67aa629189f73b053634668b20';
  //let city = 'London'
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather); 
}

citySearch('Toronto')

function displayCity(event) {
  event.preventDefault();
  let city = document.querySelector('#cityInput').value;
  citySearch(city);
}

//Function Calls
document.querySelector('#searchButton').addEventListener('click', displayCity)
document.querySelector('#cityForm').addEventListener('submit', displayCity)


//Get API info
function showWeather(response) {
    console.log(response);


    //disply city name
    let cityName = (response.data.name);
    let displayCity = document.querySelector('#city');
    displayCity.innerHTML = `${cityName}`
    //document.querySelector('#city).innerHTML = response.data.name;

    //display description - CAPITALIZE!!!
    let explanation = (response.data.weather[0].description);
    let displayExplanation = document.querySelector('#description');
    displayExplanation.innerHTML = `${explanation}`
    //document.querySelector('#description).innerHTML = response.data.weather[0].description

    //display temp in h1
    let temperature = Math.round(response.data.main.temp);
    let displayTemp = document.querySelector('h1');
    displayTemp.innerHTML = `${temperature}˚C`
    //document.querySelector('h1').innerHTML = response.data.main.temp;

    //display real feel
    let feelsLike = Math.round(response.data. main.feels_like);
    let displayRealFeel = document.querySelector('#realFeel');
    displayRealFeel.innerHTML = `Feels Like ${feelsLike}˚C`

    //display humidity
    let humidity = (response.data.main.humidity);
    let displayHumidity = document.querySelector('#humid');
    displayHumidity.innerHTML = `Humidity ${humidity}%` 
}

//Display current location
function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let units = "metric";
  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

document.querySelector('#searchLocation').addEventListener('click', getLocation)








