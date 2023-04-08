// https://opentdb.com/api.php?amount=10

const options = document.querySelector('.quiz-options');
const question = document.querySelector('#question');
const quiz_body = document.querySelector('.quiz_body');
const correct_score = document.querySelector('.correct-score');
const total_question = document.querySelector('.total-question');

let _correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;

document.addEventListener('DOMContentLoaded', () => {
    loadquestions();
    correct_score.textContent = correctScore;
    total_question.textContent = totalQuestion;
})

async function loadquestions() {
    const apiURL = 'https://opentdb.com/api.php?amount=10';
    const result = await fetch(`${apiURL}`);
    const data = await result.json();
    console.log(data.results[0]);
    showQuestion(data.results[0]);
}




function showQuestion(data) {
    let correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionList = incorrectAnswer;

    // console.log("hi",incorrectAnswer.__proto__);

    optionList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    console.log(optionList);
    console.log(correctAnswer);
    

    // _question.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;
    question.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;

    options.innerHTML = `
    ${optionList.map((option, index) => `
        <li> ${index + 1}. <span>${option}</span> </li>
    `).join('')}
`;

    selectOption();

}

function selectOption(){
    options.querySelectorAll('li').forEach(function(option){
        option.addEventListener('click', function(){
           console.log('hii')
        });
    });
}