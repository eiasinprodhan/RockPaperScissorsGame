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

  let computerInput;

let userInput;

let userPoints = document.getElementById("userPoints");
let computerPoints = document.getElementById("computerPoints");

let userPoint = 0;
let computerPoint = 0;

let imageUser = document.getElementById("imageUser");
let imageComputer = document.getElementById("imageComputer");

rockButton.addEventListener("click", ()=>{
    computerInput = randomIntFromInterval(1, 3);
    gameBoard.style.display = "none";
    gameResult.style.display = "block";
    userInput = 1;
    gameResults(userInput, computerInput);
});

paperButton.addEventListener("click", ()=>{
    computerInput = randomIntFromInterval(1, 3);
    gameBoard.style.display = "none";
    gameResult.style.display = "block";
    userInput = 2;
    gameResults(userInput, computerInput);
});

scissorsButton.addEventListener("click", ()=>{
    computerInput = randomIntFromInterval(1, 3);
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
        user.src = "images/" + gameData(userInput) + ".png";
        computer.src = "images/" + gameData(computerInput) + ".png";
        imageUser.innerHTML = gameData(userInput).toUpperCase();
        imageComputer.innerHTML = gameData(computerInput).toUpperCase();
        userPoint++;
        userPoints.innerHTML = userPoint;
        computerPoints.innerHTML = computerPoint;
    }
    else if(userInput == computerInput){
        gameResultH2.innerHTML ="Match Draw, Play Again";
        user.src = "images/" + gameData(userInput) + ".png";
        computer.src = "images/" + gameData(computerInput) + ".png";
        imageUser.innerHTML = gameData(userInput).toUpperCase();
        imageComputer.innerHTML = gameData(computerInput).toUpperCase();
    }
    else{
        gameResultH2.innerHTML = "You Lose";
        user.src = "images/" + gameData(userInput) + ".png";
        computer.src = "images/" + gameData(computerInput) + ".png";
        imageUser.innerHTML = gameData(userInput).toUpperCase();
        imageComputer.innerHTML = gameData(computerInput).toUpperCase();
        computerPoint++;
        userPoints.innerHTML = userPoint;
        computerPoints.innerHTML = computerPoint;
    }
  }

  function gameData(input){
    switch(input){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
  }

  function show(){
    gameBoard.style.display = "block";
    gameResult.style.display = "none";
  }