//Variables for manipulation 
const buttons = document.querySelectorAll(".button");
const playerChoiceCont = document.querySelector("#player-choice");   
const playerChoiceImg = document.createElement("img");
    playerChoiceImg.classList.add("choice-img");
const computerChoiceCont = document.querySelector("#computer-choice");    
const computerChoiceImg = document.createElement("img");
    computerChoiceImg.classList.add("choice-img");   
const resultCont = document.querySelector("#result");
const result = document.createElement("h2");
    result.classList.add("result");
const body = document.querySelector("body");
const finalCont = document.createElement("div");
    finalCont.classList.add("final-cont");
const finalWinner = document.createElement("h1");
    finalWinner.classList.add("final-winner")
const playAgain = document.createElement("button");
    playAgain.classList.add("play-again");
const playerSquare = document.querySelectorAll(".player-square")
const computerSquare = document.querySelectorAll(".computer-square")


let playerScore = 0;
let computerScore = 0; 

let playerIncrease = false;
let computerIncrease = false;

//LISTEN FOR CLICK TO START
buttons.forEach((button) => {
    button.addEventListener('click', startRound);
});

//START ROUND 
function startRound() {
    let player = this.id;
    switch(player){
        case "rock":
        playerChoiceImg.src = "images/blackrock.png";
        playerChoiceImg.alt = "rock";
        break;

        case "paper":
        playerChoiceImg.src = "images/blackpaper.png";
        playerChoiceImg.alt = "paper";
        break;

        case "scissors":
        playerChoiceImg.src = "images/blackscissor.png";
        playerChoiceImg.alt = "scissors";
        break;
    }
    playerChoiceImg.classList.remove("winnerGlow");
    computerChoiceImg.classList.remove("winnerGlow");
    playerChoiceCont.appendChild(playerChoiceImg);
    let computer = computerPlay();
    playRound(player, computer);
} 

//COMPUTER SELECTION 
function computerPlay(){
    let moves = ["rock", "paper", "scissors"];
    let computer = moves[Math.floor(Math.random() * moves.length)];
    switch(computer){
        case "rock":
        computerChoiceImg.src = "images/blackrock.png";
        computerChoiceImg.alt = "rock";
        break; 

        case "paper":
        computerChoiceImg.src = "images/blackpaper.png";
        computerChoiceImg.alt = "paper";
        break;

        case "scissors":
        computerChoiceImg.src = "images/blackscissor.png";
        computerChoiceImg.alt = "scissors";
        break;
    } 
    computerChoiceCont.appendChild(computerChoiceImg);
    return computer;
}   

//FINDING WINNER OF ROUND
function playRound(playerSelection, computerSelection){ 
    
    if(playerSelection === computerSelection){
        result.textContent = "It's a tie!";
    
    }else if(   playerSelection === "rock" && computerSelection === "scissors"
                || playerSelection === "paper" && computerSelection === "rock"
                || playerSelection === "scissors" && computerSelection === "paper"
            ){
        result.textContent = "You win!";
        playerChoiceImg.classList.add("winnerGlow");
        playerScore++;
        playerIncrease = true;
        displayScore();
    
    }else{
        result.textContent = "You lose!";
        computerChoiceImg.classList.add("winnerGlow");
        computerScore++;
        computerIncrease = true;
        displayScore();
        
    }
    resultCont.appendChild(result);
    
    if(computerScore === 5|| playerScore === 5){
        endOfGame(playerScore, computerScore);
    }

}

//SCORING
function displayScore(){
    for(i = 0; i < playerScore; i++){
        if(playerIncrease){
        playerSquare[i].classList.add("white-square");
        }
    }

    for(i = 0; i < computerScore; i++){
        if(computerIncrease){
        computerSquare[i].classList.add("white-square");
        }
    }
}
    
    
//FINDING FINAL SCORE
function endOfGame(playerScore, computerScore){
        if(playerScore > computerScore){
            finalWinner.textContent = "Congrats, you won the game!";
        }else if(playerScore < computerScore){
            finalWinner.textContent = "You got beat by a computer!";
        }else{
            finalWinner.textContent = "It's a tie, no one wins :( ";
        }
        body.appendChild(finalCont);
        finalCont.appendChild(finalWinner);
        playAgain.textContent = "Play Again?";
        finalCont.appendChild(playAgain);
        playAgain.addEventListener('click', () => {
            window.location.reload()
        });
    }