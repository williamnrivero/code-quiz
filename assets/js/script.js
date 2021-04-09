var start = document.getElementById('start-button')
var frontPage = document.getElementById('front-page')
var questions = document.getElementById('questions')

function quizStart(){
    frontPage.setAttribute('class' , 'hidden')
    questions.removeAttribute('class')
};

start.onclick = quizStart