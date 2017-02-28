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
	var array = [];
 	var result = "";
  	for (var i = x.length - 1; i >= 0; i--) {
	    if (x.charAt(i) === " ") {
	      var newStr = x.slice(x.lastIndexOf(x.charAt(i))+1);
	      array.push(newStr);
	      x = x.slice(0, x.lastIndexOf(x.charAt(i)));
	    }
	    else if (i === 0) {
	      var newStr = x.slice(0);
	      array.push(newStr);
	    }
	    else {
	    }
	}
  	for (var i = 0; i < array.length; i++){
  		result += array[i] + " ";
  	}
  	result = result.slice(0, result.length - 1);
  	return result;
}