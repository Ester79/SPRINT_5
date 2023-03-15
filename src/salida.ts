
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


// Fetch API Javascript Jokes
const URL_API = "https://icanhazdadjoke.com/";
const OPTIONS_GET_REQUEST = {
    method: "GET",
    headers: {
        "Accept": "application/json",
    },
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
            // this.currentJoke.date = data.date;           
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

