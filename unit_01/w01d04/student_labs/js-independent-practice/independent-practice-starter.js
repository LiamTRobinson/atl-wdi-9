//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

var lengths = function(x){
	var array = [];
	for (var i = 0; i < x.length; i++) {
		array.push(x[i].length);
	}
	return array;
}

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var transmogrifier = function(x, y, z) {
	return Math.pow(x * y, z);
}

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

var wordReverse = function(x) {
	var newStr = "";
	for (i = x.length - 1; i >= 0; i--) {
		newStr += x.charAt(i);
	}
	return newStr;
}