//Global Variables used throughout script//
var start = document.getElementById('start-button')
var quizStart = document.getElementById('quizStart')
var firstQuestion = document.getElementById('firstQuestion')
var secondQuestion = document.getElementById('secondQuestion')
var question1 = document.getElementById('question1')
var answer1 = document.getElementById('answer1')
var question2 = document.getElementById('question2')
var answer2 = document.getElementById('answer2')
var question3 = document.getElementById('question3')
var answer3 = document.getElementById('answer3')
var lastPage = document.getElementById('lastPage')
var timeSet = document.getElementById('timer')
var time = 60;

//This hides the first page and shows the second page//
function clickStart(){
    quizStart.setAttribute('class' , 'hidden')
    question1.removeAttribute('class')
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

//Questions array//
const myQuestions = [
    {
        q: "This is question 1",
        a: {
            a: "This is an answer",
            b: "This is an answer",
            c: "This is an answer"
        },
        correctAnswer: "c"
    },
    {
        q: "This is question 2",
        a: {
            a: "This is an answer",
            b: "This is an answer",
            c: "This is an answer"
        },
        correctAnswer: "c"
    },
    {
        q: "This is question 3",
        a: {
            a: "This is an answer",
            b: "This is an answer",
            c: "This is an answer"
        },
        correctAnswer: "d"
    }
];


myQuestions.forEach( (currentQuestion, questionNumber) => {
    // the code we want to run for each question goes here
  });
