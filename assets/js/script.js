//Gathering HTML elements for manipulation//
var start = document.getElementById('start-button')
var quizStart = document.getElementById('quizStart')
var firstQuestion = document.getElementById('firstQuestion')
var secondQuestion = document.getElementById('secondQuestion')
var thirdQuestion = document.getElementById('thirdQuestion')
var question1 = document.getElementById('question1')
var answer1 = document.getElementById('answer1')
var question2 = document.getElementById('question2')
var answer2 = document.getElementById('answer2')
var question3 = document.getElementById('question3')
var answer3 = document.getElementById('answer3')
var lastPage = document.getElementById('lastPage')
var seconds = document.getElementById('countdown').textContent;


//This hides the first page and shows the second page//
function clickStart(){
    quizStart.setAttribute('class' , 'hidden')
    question1.removeAttribute('class')
    
    //Timer starts once 'Start Quiz' button is pressed//
    var countdown = setInterval(function()
{
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);
};

start.onclick = clickStart;

//This hides the second page and shows the third page//
function response1(){
    firstQuestion.setAttribute('class' , 'hidden')
    question2.removeAttribute('class')
    
  
};

answer1.onclick = response1;

//This hides the third page and shows the fourth page//
function response2(){
    secondQuestion.setAttribute('class' , 'hidden')
    question3.removeAttribute('class')
}

answer2.onclick = response2;

//This hides the fourth page and shows the last page//
function response3(){
    thirdQuestion.setAttribute('class' , 'hidden')
    lastPage.removeAttribute('class')
}

answer3.onclick = response3;


myQuestions.forEach( (currentQuestion, questionNumber) => {
    // the code we want to run for each question goes here
  });

  var startQuiz = function() {


  }


//Things I grabbed online as resources//

  var questions = [
    {
        title: "Commonly Used data types DO NOT include:",
        choices: ["stings", "alerts", "booleans"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statment is enclosed within _____.",
        choices: ["parentheses", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What javascipt method can we use to select an html element?",
        choices: ["document.queryselector()", "document.getElementById", "Both 1 and 2"],
        answer: "Both 1 and 2"
    }
]


function createAnswer(text, isRight) {
    var answer = document.createElement("button");
    answer.innerHTML = text;
    answer.addEventListener("click", validateAnswer(isRight));
    return answer;
}

function createQuestion(questionId, question) {
    var questionHtml= document.createElement("h1");
    questionHtml.innerHTML = question.title;
    var questionDiv = document.createElement("div");
    questionDiv.setAttribute("id", questionId);
    questionDiv.setAttribute("class", "buttons");
    for(choice in question.choices) {
        var answerButton = createAnswer(choice, choice === question.answer);
        questionDiv.appendChild(answerButton);
    }
    return questionHtml;
}

function createTest() {
    var i = 1;
    var body = document.getElementsByTagName("body");
    for(question in questions) {
        var questionElement = createQuestion("question"+i++, question);
        body.appendChild(questionElement)
    }
}

function validateAnswer(isRight) {

}


//Unfortunately I wasn't able to finish this assignment entirely... This is as far as I got for now. I will try and resubmit this challenge again at a later time.