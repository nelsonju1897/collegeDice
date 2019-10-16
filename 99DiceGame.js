function diceRoll(n){
return  Math.floor((Math.random() * n) + 1);
}

function runGame(){
	let thirteenSidedDice;
	let tenSidedDice;
	let eightSidedDice;
	let fourSidedDice;

	currentPlayerScore = diceRoll(100);
	console.log("Your starting score is: " + currentPlayerScore);

	currentPlayerTurns = diceRoll(20);
	console.log(currentPlayerTurns);	
	
	while(currentPlayerScore < 99 && currentPlayerTurns >= 0){
		let result = prompt("Please enter 13, 10, 8, or 4");
		if(result == "13"){
			thirteenSidedDice = randomDice();
		}
		else if(result == "10"){
			tenSidedDice = extraTurnDice();
		}
		else if(result == "8"){
			eightSidedDice = normalDice();
		}
		else if(result == "4"){
			fourSidedDice = specialDice();
		}
		else{
			console.log("Not valid");
		}
		if(currentPlayerScore == 99){
			winCondition();
		}
		if(currentPlayerTurns <= 0  || currentPlayerScore > 99){
			loseCondition();
		}
	}
}

function randomDice(){
	thirteenSidedDice = diceRoll(13);

		if(thirteenSidedDice == 1){
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
			console.log("You rolled: " + thirteenSidedDice++);
		}
		else if(thirteenSidedDice == 2){
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
			console.log("You rolled: " + thirteenSidedDice);
		}
		else if(thirteenSidedDice == 3){
			currentPlayerTurns--;
			console.log("You rolled a 4 Skip 1 turn.");
		}
		else if(thirteenSidedDice == 4){
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
			console.log("You rolled: " + thirteenSidedDice);
		}
		else if(thirteenSidedDice == 5){
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
			console.log("You rolled: " + thirteenSidedDice);
		}
		else if(thirteenSidedDice == 6){
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
			console.log("You rolled: " + thirteenSidedDice);
		}
		else if(thirteenSidedDice == 7){
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
			console.log("You rolled: " + thirteenSidedDice);
		}
		else if(thirteenSidedDice == 8){
			thirteenSidedDice++;
			currentPlayerScore = 99;
			console.log("You rolled: " + thirteenSidedDice);
		}
		else if(thirteenSidedDice == 9){
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore - 10;
			console.log("You rolled: " + thirteenSidedDice);
		}
		else if(thirteenSidedDice == 10){
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + 10;
			console.log("You rolled: " + thirteenSidedDice);
		}
		else if(thirteenSidedDice == 11){
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + 10;
			console.log("You rolled: " + thirteenSidedDice);
		}
		else if(thirteenSidedDice == 12){
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + 0;
			console.log("You rolled: " + thirteenSidedDice);
		}
		else if(thirteenSidedDice == 13){
			let ace = prompt("Choose 1 or 11");
			console.log("You rolled: " + thirteenSidedDice);
				if (ace == 1){
					currentPlayerScore = currentPlayerScore + 1;
				} 
				else if(ace == 11){
					currentPlayerScore = currentPlayerScore + 11;
				}
		}
		currentPlayerTurns--;
		console.log("Your current score is:" + currentPlayerScore)
		console.log(currentPlayerTurns)
}

function extraTurnDice(){	
		tenSidedDice = diceRoll(10);
		currentPlayerTurns++
		currentPlayerScore = (currentPlayerScore - tenSidedDice);
		console.log("You rolled: " + tenSidedDice);
		console.log("Your current score is:" + currentPlayerScore)
		console.log("Turns remaining: " + currentPlayerTurns)
	}

function normalDice(){
	eightSidedDice = diceRoll(8);
		if(eightSidedDice == 1){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + eightSidedDice;
			console.log("You rolled: " + eightSidedDice++);
		}
		else if(eightSidedDice == 2){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + eightSidedDice;
			console.log("You rolled: " + eightSidedDice);
		}
		else if(eightSidedDice == 3){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 5;
			console.log("You rolled: " + eightSidedDice);
		}
		else if(eightSidedDice == 4){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 6;
			console.log("You rolled: " + eightSidedDice);
		}
		else if(eightSidedDice == 5){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 7;
			console.log("You rolled: " + eightSidedDice);
		}
		else if(eightSidedDice == 6){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 8;
			console.log("You rolled: " + eightSidedDice);
		}
		else if(eightSidedDice == 7){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 10;
			console.log("You rolled: " + eightSidedDice);
		}
		else if(eightSidedDice == 8){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 10;
			console.log("You rolled: " + eightSidedDice);
		}
		currentPlayerTurns--;
		console.log("Your current score is:" + currentPlayerScore)
		console.log(currentPlayerTurns)
}

function specialDice(){
	fourSidedDice = diceRoll(4);
	if(fourSidedDice == 1){
		currentPlayerTurns--;
		console.log("You rolled a 1. Skip 1 turn");
	}
	else if(fourSidedDice == 2){
		currentPlayerScore = 99;
		console.log("You rolled: " + fourSidedDice);
	}
	else if(fourSidedDice == 3){
		currentPlayerScore = currentPlayerScore - 10;
		console.log("You rolled: " + fourSidedDice);
	}
	else if(fourSidedDice == 4){
		let ace = prompt("Choose 1 or 11")
		console.log("You rolled: " + fourSidedDice);
		if (ace == 1){
			currentPlayerScore = currentPlayerScore + 1;
		} 
		else if(ace == 11){
			currentPlayerScore = currentPlayerScore + 11;
		}
		else{
			console.log("Not valid");
		}
	}
	currentPlayerTurns--;
	console.log("Your current score is:" + currentPlayerScore)
	console.log(currentPlayerTurns)
}

function winCondition(){
	if(currentPlayerScore == 99){
		console.log("You WIN!");
		let endquestion = prompt("Do you want to play again? Type Yes to restart, type No to quit.");
		if(endquestion == "Yes"){
			runGame();
		}
	}	
}

function loseCondition(){
	if(currentPlayerTurns <= 0  || currentPlayerScore > 99){
		console.log("You lose.");
		let endquestion = prompt("Do you want to play again? Type Yes to restart, type No to quit.");
		if(endquestion == "Yes");
			runGame();
		}
	}