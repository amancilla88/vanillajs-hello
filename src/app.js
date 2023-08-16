/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
window.onload = function() {
  //write your code here
  let randomWhoNumber = Math.floor(Math.random() * who.length - 1 + 1);
  let randomWho = who[randomWhoNumber];

  let randomWhatNumber = Math.floor(Math.random() * what.length - 1 + 1);
  let randomWhat = what[randomWhatNumber];

  let randomActionNumber = Math.floor(Math.random() * action.length - 1 + 1);
  let randomAction = action[randomActionNumber];

  let randomWhenNumber = Math.floor(Math.random() * when.length - 1 + 1);
  let randomWhen = when[randomWhenNumber];
  let sentence =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

  document.getElementById("excuse").innerHTML = sentence;

  console.log(sentence);
};
