var button = document.querySelector('button')
button.addEventListener('click', checkAnswer)
var answerValue
function checkAnswer (radio) {
  radio.preventDefault()
  getAnswerValue()
  if (answerValue === 'correct') {
    console.log('correct')
  } else { console.log('wrong') }
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
