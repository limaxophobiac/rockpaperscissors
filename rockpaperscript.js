console.log("Hello World");

const rockBtn = document.querySelector('#RockBtn');
const paperBtn = document.querySelector('#PaperBtn');
const scissorsBtn = document.querySelector('#ScissorsBtn');
const resultDiv = document.querySelector('#results');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

let playerWins = 0;
let computerWins = 0;

function computerPlay() {
	let randNum = Math.floor(Math.random()*3);
	let choice = "";
	switch (randNum){
		case 0:
			choice = "rock";
			break;
		case 1:
			choice = "paper";
			break;
		case 2:
			choice = "scissors";
			break;
	}
	return choice;
}

function playRound(playerSelection, computerSelection){
	playerSelection = playerSelection.toLowerCase();
	let result = "";
	if (playerSelection === "rock"){
		switch (computerSelection){
			case "rock":
				result = "Tie, Rock vs. Rock.";
				break;
			case "paper":
				result = "You lose! Paper beats Rock!";
				break;
			case "scissors":
				result = "You win! Rock beats Scissors!";
				break;
		}
	} else if (playerSelection === "paper"){
		switch (computerSelection){
			case "rock":
				result = "You win! Paper beats Rock!";
				break;
			case "paper":
				result = "Tie, Paper vs. Paper.";
				break;
			case "scissors":
				result = "You lose! Scissors beat paper!";
				break;
		}
	} else if (playerSelection === "scissors"){
		switch (computerSelection){
			case "rock":
				result = "You lose! Rock beats Scissors!";
				break;
			case "paper":
				result = "You win! Scissors beat Paper!";
				break;
			case "scissors":
				result = "Tie, Scissors vs. Scissors.";
				break;
		}
	} else {
		result = "choose paper rock or scissors";
	}

	if (result.slice(4,7)==="win"){
		playerWins++;
	} else if (result.slice(4,8)==="lose") {
		computerWins++;
	}
	


	if (computerWins === 5 || playerWins === 5){
		if (computerWins === 5){
			alert("You lose, computer wins!");
		} else {
			alert("You win, computer loses!");
		}
		playerWins = 0;
		computerWins = 0;
	}

	playerScore.textContent = playerWins;
	computerScore.textContent = computerWins;

	const innerResultDiv = document.createElement('div');
	innerResultDiv.textContent = result;
	resultDiv.appendChild(innerResultDiv);
}

rockBtn.addEventListener('click', () => playRound(('rock'), computerPlay()));
paperBtn.addEventListener('click', () => playRound(('paper'), computerPlay()));
scissorsBtn.addEventListener('click', () => playRound('scissors', computerPlay()));

/*
function game(){
	let playerWins = 0;
	let computerWins = 0;
	for (let i = 0; i < 5; i++){
		let playerSelection = window.prompt("pick rock paper or scissors");
		let computerSelection = computerPlay();
		let result = playRound(playerSelection, computerSelection);
		if (result.slice(4,7)==="win"){
			playerWins++;
		} else if (result.slice(4,8)==="lose") {
			computerWins++;
		}
		console.log(result);
	}
	
	if (playerWins > computerWins){
		console.log("You won the game!");
	} else if (computerWins > playerWins){
		console.log("You lost the game!")
	} else {
		console.log("The game was a tie");
	}
}

game();
*/