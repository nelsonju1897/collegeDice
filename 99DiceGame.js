function diceRoll(n){
	return  Math.floor((Math.random() * n) + 1);
}

	let hundredSidedDice = diceRoll(100);
	let twentySidedDice = diceRoll(20);	
	let thirteenSidedDice = diceRoll(13);
	let tenSidedDice = diceRoll(10);
	let eightSidedDice = diceRoll(8);
	let fourSidedDice = diceRoll(4);
	let result = prompt("Please enter 100, 20, 13, 10, 8, or 4");
	if(result == "100"){
		diceRoll(100);
		console.log(hundredSidedDice)
	}
	else if(result == "20"){
		diceRoll(20);
		console.log(twentySidedDice)
	}
	else if(result == "13"){
		diceRoll(13);
		console.log(thirteenSidedDice)
	}
	else if(result == "10"){
		diceRoll(10);
		console.log(tenSidedDice)
	}
	else if(result == "8"){
		diceRoll(8);
		console.log(eightSidedDice)
	}
	else if(result == "4"){
		diceRoll(4);
		console.log(fourSidedDice)
	}


