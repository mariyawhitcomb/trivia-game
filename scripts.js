
var questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript',
    prompts: ['<script>', '<js>', '<javascript>'],
    answer: '<script>'
  },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    prompts: ['The <head> section', 'Both the <head> section and the <body> section are correct', 'The <body> section'],
    answer: 'Both the <head> section and the <body> section are correct'

  },
  {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    prompts: ['<script name="xxx.js">','<script src="xxx.js">','<script href="xxx.js">'],
    answer: '<script src="xxx.js">'
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    prompts: ['msg("Hello World")', 'alert("Hello World")', 'alertBox("Hello World")'],
    answer: 'alert("Hello World")'
  },
  {
    question: 'How do you create a function in JavaScript?',
    prompts: ['function:myFunction()', 'function = myFunction()', 'function myFunction()'],
    answer: 'function myFunction()'
  },
  {
    question: 'How do you call a function named "myFunction"?',
    prompts: ['call myFunction()', 'call function myFunction()', 'myFunction()'],
    answer: 'myFunction()'
  },
  {
    question: 'How to write an IF statement in JavaScript?',
    prompts: ['if i == 5 then', 'if i = 5', 'if (i == 5)'],
    answer: 'if (i == 5)'
  },
  {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    prompts: ['if (i != 5)', 'if i =! 5 then', 'if (i <> 5)'],
    answer: 'if (i != 5)'
  },
  {
    question: 'How can you add a comment in a JavaScript?',
    prompts: ["'This is a comment", "//This is a comment", "<!--This is a comment-->"],
    answer: '//This is a comment'
  },
  {
    question: 'How do you round the number 7.25, to the nearest integer?',
    prompts: ['Math.round(7.25)', 'rnd(7.25)', 'Math.rnd(7.25)'],
    answer: 'Math.round(7.25)'
  },
  {
    question: 'How do you find the number with the highest value of x and y?',
    prompts: ['ceil(x, y)', 'Math.max(x, y)', 'Math.ceil(x, y)'],
    answer: 'Math.max(x, y)'
  },
  {
    question: "How can you detect the client's browser name?",
    prompts: ['client.navName', 'navigator.appName', 'browser.name'],
    answer: 'navigator.appName'
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
  randomQuestion()
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
      var percent = (score/questions.length*10)
      var percentRound = Math.round(percent * 100) / 100
    document.querySelector('.percent').innerText = `Congratulations!\nYou are ${percentRound}% developer!`
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

// function resetScore () {
//   highScore.setItem('highScore', `0`)
// }
