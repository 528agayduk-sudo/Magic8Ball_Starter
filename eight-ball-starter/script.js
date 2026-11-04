/*
  Magic 8 Ball
  Name: Andriy G
  Period: 4
*/

 // get input Values
function askEightBall() {
  let userName = document.getElementById('nameInput').value;
  let userQuestion = document.getElementById('questionInput').value;
  console.log(userName, userQuestion)

 // show the question on site
 document.getElementById('questionOut').textContent = "You asked: " + userQuestion;

  //Greet the user/
  let greeting

  if (userName === ""){
    greeting = "Hello Mystery Person!"
  } else {
    greeting = `Hello, ${userName}!`
  }

document.getElementById('greeting').textContent = greeting;

//check the question
if (userQuestion ==='') {
document.getElementById('questionOut').textContent = ''
document.getElementById('answer').textContent = 'The 8 ball needs a question!'
document.getElementById('answerType').innerHTML = ''
return
}
//get a random number 

//get the magic 8balls answer

//Show the 8ball answer type badge













}
