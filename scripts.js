var button = document.querySelector('button')
button.addEventListener('click', checkAnswer)
var answerValue
var score = 0
let i = 0
function currentQuestion (i) {
  generateQuestion(i)
}
var questions = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
    prompts: ['answer1', 'answer2', 'answer3'],
    answer: 'answer1'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur',
    prompts: ['answer1', 'answer2', 'answer3'],
    answer: 'answer1'
  }
]
function generateQuestion (i) {
  document.querySelector('.question').innerText = questions[i].question

  for (let x = 0; x < questions[i].prompts.length; x++) {
    document.querySelector(`#choice${x + 1}`).innerText = questions[i].prompts[x]
  }
}

currentQuestion(i)

function checkAnswer (radio) {
  radio.preventDefault()
  getAnswerValue()
  if (answerValue === questions[i].answer) {
    console.log('correct')
    score +=10
    console.log(score)
    document.body.classList.add('good-job')
  } else {
      console.log('wrong')
      document.body.classList.add('game-over')
    }
}
function getAnswerValue () {
  if (document.getElementById('answer1').checked) {
    answerValue = document.getElementById('choice1').innerText
  }
  if (document.getElementById('answer2').checked) {
    answerValue = document.getElementById('choice2').innerText
  }
  if (document.getElementById('answer3').checked) {
    answerValue = document.getElementById('choice3').innerText
  }
}
