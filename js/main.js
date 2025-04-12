let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let gameBoard = document.getElementById("gameBoard");
let gameResult = document.getElementById("gameResult");
let gameResultH1 = document.querySelector("#gameResult h1");
let gameResultH2 = document.querySelector("#gameResult h2");
let gameResultH3 = document.querySelector("#gameResult h3");
let result;
let user = document.getElementById("user");
let computer = document.getElementById("computer");
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let computerInput = randomIntFromInterval(1, 3);

let userInput;

rockButton.addEventListener("click", ()=>{
    gameBoard.style.display = "none";
    gameResult.style.display = "block";
    userInput = 1;
    gameResults(userInput, computerInput);
});

paperButton.addEventListener("click", ()=>{
    gameBoard.style.display = "none";
    gameResult.style.display = "block";
    userInput = 2;
    gameResults(userInput, computerInput);
});

scissorsButton.addEventListener("click", ()=>{
    gameBoard.style.display = "none";
    gameResult.style.display = "block";
    userInput = 3;
    gameResults(userInput, computerInput);
});

  function gameResults(userInput, computerInput){
    if(userInput==1 && computerInput==3
        || userInput==2 && computerInput==1
        || userInput==3 && computerInput==2
    ){
        gameResultH2.innerHTML = "You Win";
        user.src = gameData(userInput);
        computer.src = gameData(computerInput);
    }
    else if(userInput == computerInput){
        gameResultH2.innerHTML ="Match Draw, Play Again";
        user.src = gameData(userInput);
        computer.src = gameData(computerInput);
    }
    else{
        gameResultH2.innerHTML = "You Lose";
        user.src = gameData(userInput);
        computer.src = gameData(computerInput);
    }
  }

  function gameData(input){
    switch(input){
        case 1:
            return "images/rock.png";
            break;
        case 2:
            return "images/paper.png";
            break;
        case 3:
            return "images/scissors.png";
            break;
    }
  }