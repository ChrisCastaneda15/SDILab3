/*
 * Christian Castaneda
 * September 9th, 2014
 * SDI
 * Lab 3
 */

	alert("JavaScript works!");
	
// Variables
	var start = "Hello!";
	var school = "\"Full Sail University\"";
	var age = 19;
	var bool = true;
	
// Outputs
	console.log(start + " My name is Chris.");
	console.log("I am " + age + " years of age.");
	console.log("I currently am a student at " + school + ".");
	console.log("It is " + bool + " that I love the program that I am in.");

// User input for boolean condtition
	var numOrWords = confirm("Do you like working with numbers or words?\n Hit OK for numbers or Cancel for words");

//If statement for boolean
	if (numOrWords == true)
	{
		var mathProb = parseInt(prompt("What is my age?"));
		if(mathProb === age)
		{
			console.log("You got the question right!");
		}
		else
		{
			console.log("You entered " + mathProb + ".\nThe correct answer was 19.");
		}
	}
	else 
	{
		var wordProb = prompt("What is the name of the school I attend?\n Remember to capitilize each word!");
		if (wordProb == "Full Sail University")
		{
			console.log("You got the question right!");
		}
		else
		{
			console.log("You entered " + wordProb + ".\nThe correct answer was Full Sail Univerity.");
		}
	}

