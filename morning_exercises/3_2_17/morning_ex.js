var makeChange = function(price, pay){
	if (pay > price){
		var result = {};
		var changeInCents = pay*100 - price*100;
		if (changeInCents >= 100) {
			var dollars = Math.floor(changeInCents / 100);
			changeInCents -= (dollars * 100);
			result["Dollars"] = dollars;
		};
		
		if (changeInCents >= 25) {
			var quarters = Math.floor(changeInCents / 25);
			changeInCents -= (quarters * 25);
			result["Quarters"] = quarters;
		};

		if (changeInCents >= 10) {
			var dimes = Math.floor(changeInCents / 10);
			changeInCents -= (dimes * 10);
			result["Dimes"] = dimes;
		};

		if (changeInCents >= 5) {
			var nickels = Math.floor(changeInCents / 5);
			changeInCents -= (nickels * 5);
			result["Nickels"] = nickels;
		};

		if (changeInCents > 0){
		var pennies = changeInCents;
		result["Pennies"] = pennies;
		}
		return result;
	}
	else if (pay === price){
		return "Thank you, come again!"
	}
	else {
		return "This is not enough money, what are you trying to pull?"
	}
}