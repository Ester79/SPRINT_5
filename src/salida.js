var currentJoke;
var arrayReport = [];
var day = "";
var temperatureOfToday = "";
// Get current day
function currentDay() {
    var today = new Date();
    var dayOftheWeek = today.getDay();
    this.day = dayOftheWeek.toString();
    console.log("today is: ", dayOftheWeek);
}
// Fetch API Javascript Jokes
var URL_API = "https://icanhazdadjoke.com/";
var OPTIONS_GET_REQUEST = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
// Fetch API Chuck Norris
var URL_API_NORRIS = "https://api.chucknorris.io/jokes/random";
var OPTIONS_GET_REQUEST_NORRIS = {
    method: "GET"
};
// Fetch API Firebase Weather
var URL_WEATHER = "https://weatherapi-12504-default-rtdb.europe-west1.firebasedatabase.app/weather.json";
function tiempo() {
    var _this = this;
    fetch(URL_WEATHER)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        data.forEach(function (element) {
            if (element.day === _this.day) {
                _this.temperatureOfToday = element.temperature;
                console.log("temperatura de hoy: ", _this.temperatureOfToday);
                _this.printWheater(element.temperature);
            }
            ;
        });
    });
}
;
function printWheater(event) {
    var printTempereature = document.getElementById("celsius");
    printTempereature.innerHTML = event + " ºC";
}
// Level 1_ Exercise 1
function nextMessage() {
    var _this = this;
    var messagess = document.getElementById('messageJoke');
    var buttonsVote = document.getElementById('voteId');
    if (currentJoke === null || currentJoke === void 0 ? void 0 : currentJoke.joke) {
        arrayReport.push(currentJoke);
    }
    fetch(URL_API, OPTIONS_GET_REQUEST)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        _this.currentJoke = {
            joke: data.joke,
            date: new Date().toISOString()
        };
        console.log('message: ', data.joke);
        console.log('arrayreport: ', _this.arrayReport);
        messagess.innerHTML = data.joke;
        buttonsVote === null || buttonsVote === void 0 ? void 0 : buttonsVote.classList.add('voteShow');
    });
}
// Level 1_ Exercise 3
function vote1() {
    this.currentJoke.score = 1;
}
function vote2() {
    this.currentJoke.score = 2;
}
function vote3() {
    this.currentJoke.score = 3;
}
// Level 2 Exercise 5
function nextMessageNorris() {
    var _this = this;
    console.log("entra a chuk");
    var messagess = document.getElementById('messageJoke');
    var buttonsVote = document.getElementById('voteId');
    if (currentJoke === null || currentJoke === void 0 ? void 0 : currentJoke.joke) {
        arrayReport.push(currentJoke);
    }
    fetch(URL_API_NORRIS, OPTIONS_GET_REQUEST_NORRIS)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        _this.currentJoke = {
            joke: data.value,
            date: new Date().toISOString()
        };
        console.log('message: ', data.value);
        console.log('arrayreport: ', _this.arrayReport);
        messagess.innerHTML = data.value;
        buttonsVote === null || buttonsVote === void 0 ? void 0 : buttonsVote.classList.add('voteShow');
    });
}
;
