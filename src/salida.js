var currentJoke;
var arrayReport = [];
// Fetch API Javascript Jokes
var URL_API = "https://icanhazdadjoke.com/";
var OPTIONS_GET_REQUEST = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
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
        // this.currentJoke.date = data.date;           
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
