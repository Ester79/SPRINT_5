"use strict";

// Fetch API Javascript Jokes
var URL_API = "https://icanhazdadjoke.com/";
var OPTIONS_GET_REQUEST = {
  method: "GET",
  headers: {
    "Accept": "application/json"
  }
};
// Level 1_ Exercise 1
function openconsola(value) {
  fetch(URL_API, OPTIONS_GET_REQUEST).then(function (response) {
    return response.json();
  }).then(function (data) {
    value = data;
    console.log('message: ', value.joke);
  });
}
function showTodo(todo) {
  console.log("".concat(todo.title, " - ").concat(todo.text));
}
showTodo({
  title: 'Eat Dinner',
  text: 'lorem111111'
});