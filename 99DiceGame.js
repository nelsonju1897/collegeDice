function diceRoll(n){
return  Math.floor((Math.random() * n) + 1);
}

function initialRoll(n){

}
		

function runGame(){
	// let hundredSidedDice;
	// let twentySidedDice;
	let thirteenSidedDice;
	let tenSidedDice;
	let eightSidedDice;
	let fourSidedDice;

	currentPlayerScore = diceRoll(100);
	console.log(currentPlayerScore);

	currentPlayerTurns = diceRoll(20);
	console.log(currentPlayerTurns);	
			

	while(currentPlayerScore <= 99 && currentPlayerTurns > 0){
		let result = prompt("Please enter 13, 10, 8, or 4");
		
		if(result == "13"){
			thirteenSidedDice = diceRoll(1);

				if(thirteenSidedDice == 1){
					thirteenSidedDice++;
					currentPlayerScore = currentPlayerScore + thirteenSidedDice
				}
				else if(thirteenSidedDice == 2){
					thirteenSidedDice++;
				}
				else if(thirteenSidedDice == 3){
					currentPlayerTurns--;
				}
				else if(thirteenSidedDice == 4){
					thirteenSidedDice++;
				}
				else if(thirteenSidedDice == 5){
					thirteenSidedDice++;
				}
				else if(thirteenSidedDice == 6){
					thirteenSidedDice++;
				}
				else if(thirteenSidedDice == 7){
					thirteenSidedDice++;
				}
				else if(thirteenSidedDice == 8){
					thirteenSidedDice++;
				}
				else if(thirteenSidedDice == 9){
					thirteenSidedDice++;
				}
				else if(thirteenSidedDice == 10){
					thirteenSidedDice++;
				}
				else if(thirteenSidedDice == 11){
					thirteenSidedDice++;
				}
				else if(thirteenSidedDice == 12){
					thirteenSidedDice++;
				}
				else if(thirteenSidedDice == 13){
					thirteenSidedDice++;
				}
			// currentPlayerScore = currentPlayerScore + thirteenSidedDice
			currentPlayerTurns--;
			console.log("Your current score is:" + currentPlayerScore)
			console.log(currentPlayerTurns)
		}
		else if(result == "10"){
			
			tenSidedDice = diceRoll(10);
			console.log(tenSidedDice)
		}
		else if(result == "8"){
			
			eightSidedDice = diceRoll(8);
			console.log(eightSidedDice)
		}
		else if(result == "4"){
			
			fourSidedDice = diceRoll(4);
			console.log(fourSidedDice)
		}
		else{
			console.log("Not valid");
		}
		
	}
}
