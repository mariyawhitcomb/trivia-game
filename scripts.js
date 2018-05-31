
var questions = [
//   {
//     question: 'QUESTION 1',
//     prompts: ['answer1', 'answer2', 'answer3'],
//     answer: 'answer1'
//   },
//   {
//     question: 'QUESTION 2',
//     prompts: ['answer1', 'answer2', 'answer3'],
//     answer: 'answer1'
//   },
//   {
//     question: 'QUESTION 3',
//     prompts: ['answer2', 'answer2', 'answer2'],
//     answer: 'answer1'
//   },
//   {
//     question: 'QUESTION 4',
//     prompts: ['answer1', 'answer2', 'answer3'],
//     answer: 'answer1'
//   },
//   {
//     question: 'QUESTION 5',
//     prompts: ['answer1', 'answer2', 'answer3'],
//     answer: 'answer1'
//   },
//   {
//     question: 'QUESTION 6',
//     prompts: ['answer1', 'answer2', 'answer3'],
//     answer: 'answer1'
//   },
//   {
//     question: 'QUESTION 7',
//     prompts: ['answer2', 'answer2', 'answer2'],
//     answer: 'answer1'
//   },
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
var radioButton = document.querySelectorAll('.radio-button')
var newGame = document.querySelector('.button-end')
newGame.addEventListener('click', restart)
var startButton = document.querySelector('.button-start')
startButton.addEventListener('click', begin)
var button = document.querySelector('#submit')
button.addEventListener('click', checkAnswer)
var answerValue
var buttonNext = document.querySelectorAll('.button-next')
buttonNext.forEach(element => element.addEventListener('click', changeQ))
var displayQuestions = document.querySelector('.question')
var score = 0
var highScore = window.localStorage
let i = 0
var index = []

function refill () {
  for (let n = 0; n < questions.length; n++) {
    index.push(n)
  }
  return index
}
function uncheck () {
  for (let r = 0; r < radioButton.length; r++) {
    if (radioButton[r].checked) {
      radioButton[r].checked = false
    }
  }
}
function randomQuestion () {
  i = index[Math.floor(Math.random() * index.length)]
  var num = index.indexOf(i)
  index.splice(num, 1)
  return i
}

function generateQuestion () {
  i = randomQuestion()
  displayQuestions.innerText = questions[i].question
  for (let x = 0; x < questions[i].prompts.length; x++) {
    document.querySelector(`#choice${x + 1}`).innerText = questions[i].prompts[x]
  }
  document.querySelector('.question-number').innerText = `Question ${questions.length - index.length} of ${questions.length}`
}

function changeQ () {
  if (index.length > 0) {
    generateQuestion()
    console.log(i)
    document.body.classList.remove('good-job')
    document.body.classList.remove('game-over')
    uncheck()
  } else {
    getHighScore()
    document.body.classList.add('game-end')
    document.querySelector('.score-display').innerText = `Your score is ${score}\nHigh score is ${parseFloat(highScore.getItem('highScore'))}`
  }
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
function begin () {
  document.body.classList.remove('start')
  document.body.classList.remove('good-job')
  document.body.classList.remove('game-over')
  refill()
  generateQuestion()
}
function restart () {
  document.body.classList.remove('game-end')
  score = 0
  startGame()
}
function startGame () {
  document.body.classList.add('start')
}
startGame()
function getHighScore () {
  if (score > highScore.getItem('highScore')) {
    highScore.setItem('highScore', `${score}`)
    alert(`Congratulations!\nNew High Score is ${score}`)
  }
}
function resetScore () {
  highScore.setItem('highScore', `0`)
}
