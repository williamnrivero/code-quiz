var start = document.getElementById('start-button')
var quizStart = document.getElementById('quizStart')
var question1 = document.getElementById('question1')
var question2 = document.getElementById('question2')
var question3 = document.getElementById('question3')
var timeSet = document.getElementById('timer')
var time = 60;

function clickStart(){
    quizStart.setAttribute('class' , 'hidden')
    question1.removeAttribute('class')
};

start.onclick = clickStart



