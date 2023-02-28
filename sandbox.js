// function randomInt(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
  
//   const rndInt = randomIntFromInterval(0, 2)
//   console.log(rndInt)



var userInput = "Rock";
var compInput = "Paper";
var gameOutcome;
var gameOutcome = function outcome(){
  function play(x,y){
  if (userInput == "Rock" && compInput == "Scissors" || userInput == "Scissors" && compInput == "Paper" || userInput == "Paper" && compInput == "Rock") {
      gameOutcome = "You Win!";
    } else if (userInput == "Rock" && compInput == "Paper" || userInput == "Paper" && compInput == "Scissors" || userInput == "Scissors" && compInput == "Rock") {
      gameOutcome = "You Lose!";
    } else if (userInput == "Rock" && compInput == "Rock" || userInput == "Paper" && compInput == "Paper" || userInput == "Scissors" && compInput == "Scissors"){
      gameOutcome = "Draw!";  
}
return gameOutcome;
}

var winner = outcome(userInput, compInput);
// console.log(gameOutcome);
return winner;
}

