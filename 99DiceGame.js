let currentPlayerScore;
let currentPlayerTurns;
let ace;

function diceRoll(n){
return  Math.floor((Math.random() * n) + 1);
}

function runGame(){
	currentPlayerScore = diceRoll(100);
	currentPlayerTurns = diceRoll(20);
		document.getElementById("currentScore").innerHTML = currentPlayerScore;
		document.getElementById("currentTurn").innerHTML = currentPlayerTurns;
		document.getElementById("randomDice").disabled = true;
		document.getElementById("randomDice").disabled = false;
		document.getElementById("powerDice").disabled = true;
		document.getElementById("powerDice").disabled = false;
		document.getElementById("normalDice").disabled = true;
		document.getElementById("normalDice").disabled = false;
		document.getElementById("extraDice").disabled = true;
		document.getElementById("extraDice").disabled = false;
		winCondition();
		loseCondition();
}

function randomDice(){
	let thirteenSidedDice = diceRoll(13);
		if(thirteenSidedDice == 1){
			document.getElementById("youDrew").innerHTML = ("You drew a 2. Add 2 to your score.");
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
		}
		else if(thirteenSidedDice == 2){
			document.getElementById("youDrew").innerHTML = ("You drew a 3. Add 3 to your score.");
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
		}
		else if(thirteenSidedDice == 3){
			document.getElementById("youDrew").innerHTML = ("You drew a 4. Skip an additional turn.");
			currentPlayerTurns--;
		}
		else if(thirteenSidedDice == 4){
			document.getElementById("youDrew").innerHTML = ("You drew a 5. Add 5 to your score.");
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
		}
		else if(thirteenSidedDice == 5){
			document.getElementById("youDrew").innerHTML = ("You drew a 6. Add 6 to your score.");
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
		}
		else if(thirteenSidedDice == 6){
			document.getElementById("youDrew").innerHTML = ("You drew a 7. Add 7 to your score.");
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
		}
		else if(thirteenSidedDice == 7){
			document.getElementById("youDrew").innerHTML = ("You drew a 8. Add 8 to your score.");
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + thirteenSidedDice;
		}
		else if(thirteenSidedDice == 8){
			document.getElementById("youDrew").innerHTML = ("You drew a 9. Score goes to 99!");
			thirteenSidedDice++;
			currentPlayerScore = 99;

		}
		else if(thirteenSidedDice == 9){
			document.getElementById("youDrew").innerHTML = ("You drew a 10, subtract score by 10.");
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore - 10;

		}
		else if(thirteenSidedDice == 10){
			document.getElementById("youDrew").innerHTML = ("You drew a Jack. Add 10 to your score.");
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + 10;

		}
		else if(thirteenSidedDice == 11){
			document.getElementById("youDrew").innerHTML = ("You drew a Queen. Add 10 to your score.");
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + 10;
		}
		else if(thirteenSidedDice == 12){
			document.getElementById("youDrew").innerHTML = ("You drew an King. Add 0 to your score.");
			thirteenSidedDice++;
			currentPlayerScore = currentPlayerScore + 0;
		}
		else if(thirteenSidedDice == 13){
			document.getElementById("youDrew").innerHTML = ("You drew an Ace. Choose 1 or 11.");
			toggleAceOne("");
			toggleAceEleven("");
			currentPlayerTurns++;			
		}
		currentPlayerTurns--;
		document.getElementById("currentScore").innerHTML = currentPlayerScore;
		document.getElementById("currentTurn").innerHTML = currentPlayerTurns;
		winCondition();
		loseCondition();
}

function extraTurnDice(){	
		let tenSidedDice = diceRoll(10);
		currentPlayerTurns++
		currentPlayerScore = (currentPlayerScore - tenSidedDice);
		winCondition();
		loseCondition();
		document.getElementById("currentScore").innerHTML = currentPlayerScore;
		document.getElementById("currentTurn").innerHTML = currentPlayerTurns;
	}

function normalDice(){
	eightSidedDice = diceRoll(8);
		if(eightSidedDice == 1){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + eightSidedDice;
		}
		else if(eightSidedDice == 2){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + eightSidedDice;
		}
		else if(eightSidedDice == 3){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 5;
		}
		else if(eightSidedDice == 4){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 6;
		}
		else if(eightSidedDice == 5){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 7;
		}
		else if(eightSidedDice == 6){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 8;
		}
		else if(eightSidedDice == 7){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 10;
		}
		else if(eightSidedDice == 8){
			eightSidedDice++;
			currentPlayerScore = currentPlayerScore + 10;
		}
		currentPlayerTurns--;
		document.getElementById("currentScore").innerHTML = currentPlayerScore;
		document.getElementById("currentTurn").innerHTML = currentPlayerTurns;
		winCondition();
		loseCondition();
}

function specialDice(){
	fourSidedDice = diceRoll(5);
	if(fourSidedDice == 1){
		currentPlayerTurns--;
		document.getElementById("youDrew").innerHTML = ("You drew a 4, skip an additional turn.");
	}
	else if(fourSidedDice == 2){
		document.getElementById("youDrew").innerHTML = ("You drew a 9. Score goes to 99!");
		currentPlayerScore = 99;
	}
	else if(fourSidedDice == 3){
		document.getElementById("youDrew").innerHTML = ("You drew a 10, subtract score by 10.");
		currentPlayerScore = currentPlayerScore - 10;
	}
	else if(fourSidedDice == 4){
		document.getElementById("youDrew").innerHTML = ("You drew a King. Add 0 to your score.");
		currentPlayerScore = currentPlayerScore + 0;
		
	}
	else if(fourSidedDice == 5){
		document.getElementById("youDrew").innerHTML = ("You drew an Ace. Choose 1 or 11.");
		toggleAceOne("");
		toggleAceEleven("");
		currentPlayerTurns++;
	}
	currentPlayerTurns--;
	document.getElementById("currentScore").innerHTML = currentPlayerScore;
	document.getElementById("currentTurn").innerHTML = currentPlayerTurns;
	winCondition();
	loseCondition();
}

function winCondition(){
	if(currentPlayerScore == 99){
		document.getElementById("currentScore").innerHTML = currentPlayerScore;
		document.getElementById("currentTurn").innerHTML = currentPlayerTurns;
		alert("You won!");
		let endquestion = prompt("Do you want to play again? Type Yes to restart, type No to quit.");
		if(endquestion == "Yes"){
			runGame();
		}
		else{

		}
	}	
}

function loseCondition(){
	if(currentPlayerTurns <= 0  || currentPlayerScore > 99){
		document.getElementById("currentScore").innerHTML = currentPlayerScore;
		document.getElementById("currentTurn").innerHTML = currentPlayerTurns;
		alert("You lost")
		let endquestion = prompt("Do you want to play again? Type Yes to restart, type No to quit.");
		if(endquestion == "Yes");
			runGame();
		}
		else{
		}
}

function toggleAceOne(showAction){
	if (showAction === "hide"){
		document.getElementById("aceOne").style.display = "none";
	}else{
		document.getElementById("aceOne").style.display = "";
	}
}

	function toggleAceEleven(showAction){
		if (showAction === "hide"){
			document.getElementById("aceEleven").style.display = "none";
		}else{
			document.getElementById("aceEleven").style.display = "";
		}
	}

function aceIsOne(){
	let ace = 1;	
	currentPlayerScore = currentPlayerScore + 1;
	currentPlayerTurns--;
	document.getElementById("currentScore").innerHTML = currentPlayerScore;
	document.getElementById("currentTurn").innerHTML = currentPlayerTurns;
	winCondition();
	loseCondition();
	toggleAceOne("hide");
	toggleAceEleven("hide");
}

function aceIsEleven(){
	let ace = 11;
	currentPlayerScore = currentPlayerScore + 11;
	currentPlayerTurns--;
	document.getElementById("currentScore").innerHTML = currentPlayerScore;
	document.getElementById("currentTurn").innerHTML = currentPlayerTurns;
	winCondition();
	loseCondition();
	toggleAceOne("hide");
	toggleAceEleven("hide");	
}