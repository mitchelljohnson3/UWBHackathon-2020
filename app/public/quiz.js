const optionOne = document.getElementById("option1");
const optionTwo = document.getElementById("option2");
const optionThree = document.getElementById("option3");
const optionFour = document.getElementById("option4");
const textOne = document.getElementById("text1");
const textTwo = document.getElementById("text2");
const textThree = document.getElementById("text3");
const textFour = document.getElementById("text4");
const formo = document.getElementById("formo");
const image_div = document.getElementById("image-div");
const body = document.getElementById("body");
const obj = questions;

let target = 0;
let correct = 0;
let wrong = 0;
const length = obj.length;

function runQuiz() {
    console.log("correct: " + correct);
    console.log("wrong: " + wrong);
    printQuestions(obj[target]);
}

function printQuestions(question) {
    let submitButton = document.createElement("div");
    let inputButton = document.createElement("input");
    inputButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submit-button");
    submitButton.appendChild(inputButton);
    image_div.setAttribute("src", question.url);
    textOne.textContent = question.choices[0];
    textTwo.textContent = question.choices[1];
    textThree.textContent = question.choices[2];
    textFour.textContent = question.choices[3];

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        let answer = question.answer;
        let studentAnswer = "";
        if (optionOne.checked) {
            target++;
            studentAnswer = "1";
        }
        if (optionTwo.checked) {
            target++;
            studentAnswer = "2";
        }
        if (optionThree.checked) {
            target++;
            studentAnswer = "3";
        }
        if (optionFour.checked) {
            target++;
            studentAnswer = "4";
        }
        optionOne.checked = false;
        optionTwo.checked = false;
        optionThree.checked = false;
        optionFour.checked = false;
        if (studentAnswer == answer) {
            correct++;
        } else {
            wrong++;
        }
        if (target < (length - 1)) {
            submitButton.remove();
            runQuiz();
        } else {
            submitScore();
        }
    });

    formo.appendChild(submitButton);
}

function submitScore() {
    body.innerHTML = "";
    body.innerHTML = `<style>
    #results-box {
      background-color: #50C9CE;
    }

    #show-results-here {
      background-color: #04E824
    }
  </style>
  <div id="results-box">
    <h2>Your Results</h2>
  </div>
  <div>
    <div id="score" name="${correct}"></div>
    <p>Score: ${correct} / 15</p>
    <p>ooof that was bad..</p>
    <p id="p1">Just kidding, I haddn't even checked yet.</p>
  </div>
  <div>
    <form action="/api/new" method="POST">
      <label for="fname">See your Standings</label><br>
      <input type="text" id="fname" name="fname"><br>
      <input type="text" id="fscore" name="fscore" readonly value="${correct}"><br>
      <input type="submit" id="button">
    </form>
  </div>
  <div id="show-results-here">
    <p>Not bad, actually.</p>
  </div>
  <div>
    <a href="index.html"><button type="button">Homepage</button></a>
  </div>`
}

runQuiz();