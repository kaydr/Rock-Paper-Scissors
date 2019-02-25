let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(user,comp){
  const choices = ["r","p","s"]
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if(letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";

}

function win(user,computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}! Congrats!`;
  document.getElementById(user).classList.add('green-glow');
  setTimeout(function(){document.getElementById(user).classList.remove('green-glow')},300);
}

function lose(user, computer){
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}! Try Again!`;
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function(){document.getElementById(user).classList.remove('red-glow')},300);

}

function draw(){
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `It's a draw! `;
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(function(){document.getElementById(user).classList.remove('gray-glow')},300);


}





function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice,computerChoice);
      break;
  }
}



function main() {
rock_div.addEventListener('click',function(){
  game("r");
})

paper_div.addEventListener('click',function(){
  game("p");
})

scissors_div.addEventListener('click',function(){
  game("s");
})
}

main();
