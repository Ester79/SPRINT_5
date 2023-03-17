
interface Joke {
    id: string;
    joke: string;
    status: number;
}

interface Report {
    joke: string;
    score: number;
    date: string;
}

let currentJoke: Report;
let arrayReport: Report[] = [];
let day: string = "";
let temperatureOfToday: string = "";

// Get current day
function currentDay() {
    const today = new Date();
    const dayOftheWeek = today.getDay();
    this.day = dayOftheWeek.toString();
    console.log("today is: ", dayOftheWeek);
}


// Fetch API Javascript Jokes
const URL_API = "https://icanhazdadjoke.com/";
const OPTIONS_GET_REQUEST = {
    method: "GET",
    headers: {
        "Accept": "application/json",
    },
};

// Fetch API Chuck Norris
const URL_API_NORRIS = "https://api.chucknorris.io/jokes/random";
const OPTIONS_GET_REQUEST_NORRIS = {
    method: "GET"
};



// Fetch API Firebase Weather
const URL_WEATHER = "https://weatherapi-12504-default-rtdb.europe-west1.firebasedatabase.app/weather.json";
function tiempo() {
    fetch(URL_WEATHER)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data); data.forEach(element => {
                if (element.day === this.day) {
                    this.temperatureOfToday = element.temperature;
                    console.log("temperatura de hoy: ", this.temperatureOfToday);
                    this.printWheater(element.temperature)
                };
            });
        });
};

function printWheater(event) {
    let printTempereature = document.getElementById("celsius") as HTMLElement;
    printTempereature.innerHTML = event + " ºC";
}

// Level 1_ Exercise 1
function nextMessage() {
    const messagess = document.getElementById('messageJoke') as HTMLInputElement;
    const buttonsVote = document.getElementById('voteId');

    if (currentJoke?.joke) {
        arrayReport.push(currentJoke);
    }
    fetch(URL_API, OPTIONS_GET_REQUEST)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.currentJoke = {
                joke: data.joke,
                date: new Date().toISOString(),
            }
            console.log('message: ', data.joke);
            console.log('arrayreport: ', this.arrayReport)
            messagess.innerHTML = data.joke;
            buttonsVote?.classList.add('voteShow');
        })
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
    console.log("entra a chuk");
    const messagess = document.getElementById('messageJoke') as HTMLInputElement;
    const buttonsVote = document.getElementById('voteId');
    if (currentJoke?.joke) {
        arrayReport.push(currentJoke);
    }
    fetch(URL_API_NORRIS, OPTIONS_GET_REQUEST_NORRIS)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.currentJoke = {
                joke: data.value,
                date: new Date().toISOString(),
            }
            console.log('message: ', data.value);
            console.log('arrayreport: ', this.arrayReport)
            messagess.innerHTML = data.value;
            buttonsVote?.classList.add('voteShow');
        });
};
