
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
    prompts: ['<script name="xxx.js">', '<script src="xxx.js">', '<script href="xxx.js">'],
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
    prompts: ["'This is a comment", '//This is a comment', '<!--This is a comment-->'],
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

var exit = document.querySelector('.exit')
exit.addEventListener('click', exitGame)
var radioButton = document.querySelectorAll('.radio-button')
var newGame = document.querySelector('.button-end')
newGame.addEventListener('click', restart)
var startButton = document.querySelector('.button-start')
startButton.addEventListener('click', begin)
var button = document.querySelector('#submit')
button.addEventListener('click', checkAnswer)
button.addEventListener('click', prevent)
var secondsDom = document.querySelector('.timer')

var answerValue
var buttonNext = document.querySelectorAll('.button-next')
buttonNext.forEach(element => element.addEventListener('click', changeQ))
var displayQuestions = document.querySelector('.question')
var score = 0
var highScore = window.localStorage
let i
var index = []
var percent
var percentRound
const seconds = 5
var timer
var timeRemaining

// function organizer
// prevent default
function prevent (e) {
  e.preventDefault()
}
// start the game => display start screen
function startGame () {
  document.body.classList.add('start')
  document.body.classList.add('js-hide')

}
// begin the game => generate questions, refills index[]
function begin () {
  resetTimer()
  document.body.classList.remove('js-hide')
  document.body.classList.remove('start')
  document.body.classList.remove('good-job')
  document.body.classList.remove('game-over')
  refill()
  uncheck()
  generateQuestion()
  timer = window.setInterval(interval, 1000)
}
// interval and reset function for the timer
function interval () {
  timeRemaining = parseInt(secondsDom.innerHTML, 10)
  if (timeRemaining === 0) {
    checkAnswer()
    resetTimer()
  } else {
    timeRemaining = timeRemaining - 1
    secondsDom.innerHTML = timeRemaining
  }
}
function resetTimer () {
  secondsDom.innerHTML = seconds
}
// submit button => check answer function using value of the checked radio
function checkAnswer () {
  clearTimeout(timer)
  getAnswerValue()
  document.body.classList.add('js-hide')

  if (answerValue === questions[i].answer) {
    score += 10
    document.body.classList.add('good-job')
  } else {
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
// next question => generates new question
function changeQ () {
  if (index.length > 0) {
    resetTimer()
    timer = window.setInterval(interval, 1000)
    generateQuestion()
    document.body.classList.remove('good-job')
    document.body.classList.remove('game-over')
    document.body.classList.remove('js-hide')
    uncheck()
  } else {
    calcPercent()
    document.querySelector('.percent').innerText = `Congratulations!\nYou are ${percentRound}% developer!`
    getHighScore()
    document.body.classList.add('game-end')
    document.querySelector('.score-display').innerText = `Your score is ${score}\nHigh score is ${parseFloat(highScore.getItem('highScore'))}`
  }
}
// exit game => brings you to the last screen
function exitGame () {
  calcPercent()
  document.querySelector('.percent').innerText = `Congratulations!\nYou are ${percentRound}% developer!`
  getHighScore()
  document.body.classList.add('js-hide')
  document.body.classList.add('game-end')
  document.querySelector('.score-display').innerText = `Your score is ${score}\nHigh score is ${parseFloat(highScore.getItem('highScore'))}`
  index = []
}
// restart function takes user back to the start screen
function restart () {
  document.body.classList.remove('game-end')
  score = 0
  startGame()
}
// refills index [] at the beginning of new game => lives in begin function
function refill () {
  for (let n = 0; n < questions.length; n++) {
    index.push(n)
  }
  return index
}
// uncheck's radio buttons before each question and in the beginning of the new game
function uncheck () {
  for (let r = 0; r < radioButton.length; r++) {
    if (radioButton[r].checked) {
      radioButton[r].checked = false
    }
  }
}
// generates i value to be used in generate question function
function randomQuestion () {
  i = index[Math.floor(Math.random() * index.length)]
  var num = index.indexOf(i)
  index.splice(num, 1)
  return i
}
// generates questions using random i
function generateQuestion () {
  i = randomQuestion()
  displayQuestions.innerText = questions[i].question
  for (let x = 0; x < questions[i].prompts.length; x++) {
    document.querySelector(`#choice${x + 1}`).innerText = questions[i].prompts[x]
  }
  document.querySelector('.question-number').innerText = `Question ${questions.length - index.length} of ${questions.length}`
}
// compares current score to the stored high score
function getHighScore () {
  if (score > highScore.getItem('highScore')) {
    highScore.setItem('highScore', `${score}`)
    alert(`Congratulations!\nNew High Score is ${score}`)
  }
}
// calculates oercentage of right answers
function calcPercent () {
  percent = (score / questions.length * 10)
  percentRound = Math.round(percent * 100) / 100
  return percentRound
}
// runs on reload
startGame()
