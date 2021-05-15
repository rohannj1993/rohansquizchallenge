var questions = [
    {
        question: "Which is the southern most capital city in the world ?:",
        choices: ["Cape Town", "Canberra", "Wellington", "Buenos Aires"],
        answer: "Wellington",
    },
    {
        question:
            "Which is the longest river in the world?:",
        choices: ["Amazon", "Mississippi", "Yangtze", "Nile"],
        answer: "Nile",
    },

    {
        question:
            "This is the capital city of the State of New York.",
        choices: ["Rochester", "Syracuse", "Albany", "New York"],
        answer: "Albany",
    },
    {
        question:
            "This is the capital city of the State of California.",
        choices: ["Oakland", "San Jose", "Sacramento", "San Diego"],
        answer: "Sacramento",
    },
    {
        question:
            "Which country has the longest coastline in the world?",
        choices: ["Brazil", "Canada", "Japan", "Chile"],
        answer: "Canada",
    }




];


var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#button-div")
var questionIndex = 0;
var correctCount = 0;

var time = 100;
var intervalId;

function startQuiz() {
    startButton.setAttribute("class","hide")
    intervalId = setInterval(updateTime, 1000);
    renderQuestion()
}



function renderQuestion() {
    questionEl.textContent = questions[questionIndex].question;

    optionListEl.innerHTML = "";

    var choices = questions[questionIndex].choices;
    var choicesLenth = choices.length;

    for (var i = 0; i < choicesLenth; i++) {
        var questionListItem = document.createElement("button");
        questionListItem.setAttribute("class","button")
        questionListItem.textContent = choices[i];
        questionListItem.onclick = checkAnswer;
        optionListEl.append(questionListItem);
    }
}
  startButton.addEventListener("click",startQuiz)

//   function nextQuestion() {
//       questionIndex++;
//       renderQuestion();
//     }
    
// function startPage() {
//     btn = document.createElement("button");
//     btn.textContent = "Start Quiz";
// }


function checkAnswer(event) {
    if (event.target.matches("button")) {
        var answer = event.target.textContent;
        if (answer === questions[questionIndex].answer) {
            questionResultEl.textContent = "Correct";
            correctCount++;
        } else {
            questionResultEl.textContent = "Incorrect";
            time -= 15 //is same as time = time-15
            if (time <0){
                endQuiz()
            }
        }
    }
  //  setTimeout(nextQuestion, 2000);
  questionIndex++;
  if (questionIndex === questions.length){
  endQuiz()
  } else {
      renderQuestion();

  }

}

// optionListEl.addEventListener("click", checkAnswer);



function endQuiz() {
    clearInterval(intervalId);
    var body = document.body;
    body.innerHTML = "Game over, You scored " + correctCount;
}

function updateTime() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}

