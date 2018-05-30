var button = document.querySelector('button')
button.addEventListener('click', checkAnswer)
var answerValue
var score = 0
function checkAnswer (radio) {
  radio.preventDefault()
  getAnswerValue()
  if (answerValue === 'correct') {
    console.log('correct')
    score +=10
    document.body.classList.add('good-job')
  } else { 
      console.log('wrong')
      document.body.classList.add('game-over')
    }
}
function getAnswerValue () {
  if (document.getElementById('answer1').checked) {
    answerValue = document.getElementById('answer1').value
  }
  if (document.getElementById('answer2').checked) {
    answerValue = document.getElementById('answer2').value
  }
  if (document.getElementById('answer3').checked) {
    answerValue = document.getElementById('answer3').value
  }
}
