var questions = [
  {
    question: 'QUESTION 1',
    prompts: ['answer1', 'answer2', 'answer3'],
    answer: 'answer1'
  },
  {
    question: 'QUESTION 2',
    prompts: ['answer1', 'answer2', 'answer3'],
    answer: 'answer1'
  },
  {
    question: 'QUESTION 3',
    prompts: ['answer2', 'answer2', 'answer2'],
    answer: 'answer1'
  },
  {
    question: 'QUESTION 4',
    prompts: ['answer1', 'answer2', 'answer3'],
    answer: 'answer1'
  },
  {
    question: 'QUESTION 5',
    prompts: ['answer1', 'answer2', 'answer3'],
    answer: 'answer1'
  },
  {
    question: 'QUESTION 6',
    prompts: ['answer1', 'answer2', 'answer3'],
    answer: 'answer1'
  },
  {
    question: 'QUESTION 7',
    prompts: ['answer2', 'answer2', 'answer2'],
    answer: 'answer1'
  },
  {
    question: 'QUESTION 8',
    prompts: ['answer1', 'answer2', 'answer3'],
    answer: 'answer1'
  },
  {
    question: 'QUESTION 9',
    prompts: ['answer1', 'answer2', 'answer3'],
    answer: 'answer1'
  },
  {
    question: 'QUESTION 10',
    prompts: ['answer1', 'answer2', 'answer3'],
    answer: 'answer1'
  },
  {
    question: 'QUESTION 11',
    prompts: ['answer1', 'answer2', 'answer3'],
    answer: 'answer1'
  }
]

var button = document.querySelector('#submit')
button.addEventListener('click', checkAnswer)
var answerValue
var buttonNextCorrect = document.querySelector('.button-next-correct')
buttonNextCorrect.addEventListener('click', changeQ)
var buttonNextIncorrect = document.querySelector('.button-next-incorrect')
buttonNextIncorrect.addEventListener('click', changeQ)
var displayQuestions = document.querySelector('.question')
var score = 0
let i = 0
var index = []
for (let i = 0; i < questions.length; i++) {
    index.push(i)
}
// var index
// function generateIndex () {

//   return index
// }
function randomQuestion () {
  i = index[Math.floor(Math.random() * index.length)]
  var num = index.indexOf(i)
  index.splice(num, 1)
  return i
}

function generateQuestion () {
  randomQuestion()
  displayQuestions.innerText = questions[i].question
  for (let x = 0; x < questions[i].prompts.length; x++) {
    document.querySelector(`#choice${x + 1}`).innerText = questions[i].prompts[x]
  }
}

function changeQ () {
  generateQuestion()
  console.log(i)
  document.body.classList.remove('good-job')
  document.body.classList.remove('game-over')
}
function checkAnswer (radio) {
  radio.preventDefault()
  getAnswerValue()
  if (answerValue === questions[i].answer) {
    console.log('correct')
    score += 10
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

generateQuestion()
