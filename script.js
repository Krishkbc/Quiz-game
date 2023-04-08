// https://opentdb.com/api.php?amount=10

const options = document.querySelectorAll('.options');
const question = document.querySelector('#question');
const quiz_body = document.querySelector('.quiz_body');
const all_option = document.querySelector('.all-option');
const correct_score = document.querySelector('.quiz_score');

let _correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 20;

document.addEventListener('DOMContentLoaded', () =>{
    correct_score.textContent = correctScore;
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

    quiz_body.innerHTML = `<h2 id="question"> ${data.question} </h2>`;
    //     all_option.innerHTML = `${optionList.map((option, index) => `<li> <p class="option-1 options">${option}</p></li>`)
    // .join('')}
    // `;

    html = `<li> <p class="option-1 options">${optionList[0]}</p></li>
<li> <p class="option-1 options">${optionList[1]}</p></li>
<li> <p class="option-1 options">${optionList[2]}</p></li>
<li> <p class="option-1 options">${optionList[3]}</p></li>
`

    quiz_body.insertAdjacentHTML('beforeend', html);
}


loadquestions();