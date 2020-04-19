const optionOne = document.getElementById("option1");
const optionTwo = document.getElementById("option2");
const optionThree = document.getElementById("option3");
const optionFour = document.getElementById("option4");
const textOne = document.getElementById("text1");
const textTwo = document.getElementById("text2");
const textThree = document.getElementById("text3");
const textFour = document.getElementById("text4");
const submitButton = document.getElementById("submit-button");
const image_div = document.getElementById("image-div");
const obj = questions;

let target = 0;
let correct = 0;
let wrong = 0;
const length = obj.length;

function runQuiz() {
    printQuestions(obj[target]);
}

function printQuestions(question) {
    image_div.setAttribute("src", question.url);
    textOne.textContent = question.choices[0];
    textTwo.textContent = question.choices[1];
    textThree.textContent = question.choices[2];
    textFour.textContent = question.choices[3];

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        switch(question.answer) {
            case "1":
                if(optionOne.checked) {
                    correct++;
                } else {
                    wrong++;
                }
            case "2":
                if(optionTwo.checked) {
                    correct++;
                } else {
                    wrong++;
                }
            case "3":
                if(optionThree.checked) {
                    correct++;
                } else {
                    wrong++;
                }
            case "4":
                if(optionFour.checked) {
                    correct++;
                } else {
                    wrong++;
                }
        }
        if (target < (length - 1) ) {
            target++;
            runQuiz();
        } else {

        }
    });
}

// function submitScore() {

// }

runQuiz();