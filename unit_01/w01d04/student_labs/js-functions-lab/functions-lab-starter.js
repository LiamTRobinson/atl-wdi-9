// Question 1
function maxOfTwoNumbers(x, y) {
	if (x > y) {
		return x;
	}
	else if (y > x) {
		return y;
	}
	else {
		return x + " = " + y;
	}
}

// Question 2
function maxOfThree(x, y, z) {
	return Math.max(x, y, z);
}

// Question 3
function isCharacterAVowel(x) {
	switch (x.toLowerCase()) {
		case "a":
			return true;
			break;
		case "e":
			return true;
			break;
		case "i":
			return true;
			break;
		case "o":
			return true;
			break;
		case "u":
			return true;
			break;
		case "y":
			return "sometimes";
			break;
		default:
			return false;
			break;
	}
}

// Question 4
function sumArray(x) {
	var sum = 0;
	for(var i = 0; i < x.length; i++){
		sum += x[i];
	}
	return sum;
}


// Question 4
function multiplyArray(x) {
	var tot = 1;
	for(var i = 0; i < x.length; i++){
		tot = tot * x[i];
	}
	return tot;
}


// Question 5
var numberOfArguments = function(){
	return arguments.length;
}



// Question 6
var reverseString = function (x){
	var newStr = "";
	for (var i = x.length - 1; i >= 0; i--) {
		newStr += x.charAt(i);
	}
	return newStr;
}


// Question 7
function findLongestWord (x) {
	var longest = 0;
	for (var i = 0; i < x.length; i++) {
		if (x[i].length > longest) {
			longest = x[i].length;
		}
	}
	return longest;
}


// Question 8
function filterLongWords (x, i) {
	var newArray = [];
	for (var j = 0; j < x.length; j++){
		if (x[j].length > i) {
			newArray.push(x[j]);
		}
		else {
		}
	}
	return newArray;
}


// Bonus 1

String.prototype.reverseString = function (){
	var newStr = "";
	for (var i = this.length - 1; i >= 0; i--) {
		newStr += this.charAt(i);
	}
	return newStr;
}

// Bonus 2
function charactersOccurencesCount(x) {
	obj = {};
	var count = 0;
	for (var i = 0; i < x.length; i++) {
		for (var j = 0; j < x.length; j++) {
			if (x[i].toLowerCase() === x[j].toLowerCase()){
				count++
			}
			else {	
			}
		}
		if (x[i] !== " "){
			obj[x[i].toLowerCase()] = count;
			count = 0;
		}
		else {
		}
	}
	return obj;
}

