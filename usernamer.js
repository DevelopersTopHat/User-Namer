var baseString = "";
//note to people of the future, don't change this value manually.
var charLimit = 8;
var limitAdjuster = 0;
var listName = "";
var displayName = document.getElementById("displayName");
var selectedLimit = document.getElementById("selectedLimit");

var containANumber = document.getElementById("containANumber");
var containASpecial = document.getElementById("containASpecial");

var radioNum = [document.getElementById("prefix"), document.getElementById("suffix")];
var radioSpecial = [document.getElementById("sprefix"), document.getElementById("ssuffix")];

containANumber.addEventListener("click", setRadioNumbers);
containASpecial.addEventListener("click", setRadioSpecial);

var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];
var list9 = [];
var list10 = [];

username.addEventListener("keypress", function(e){
	if(e.which === 13 ){
		getBaseString();	
	}
});

function getBaseString() {
	if (document.getElementById("username").value.length != 0) {
		baseString = document.getElementById("username").value;
		console.log("The inputed value is: " + baseString);
		if (baseString.length < charLimit) {
			if (document.getElementById("containACapital").checked) {
				console.log("The base string before capitalizeFirstLetter is: " + baseString);
				baseString = capitalizeFirstLetter(baseString);
			}
			adjustLimit();
			determineListName();
			generateBaseLists();
			baseString += getRandomWord(); 
			baseString = addAdditionalAppendage(baseString);
			displayName.textContent = "Your name is: " + baseString;
			console.log("The final output is: " + baseString);
		}
		else {
			//something saying that you've gone past the limit.
			displayName.textContent = "Your name exceeds the character limit, adjust the character limit so that you can get your longer name.";
		}
	} 
	else {
		charLimit = selectedLimit.value;
		console.log("No input, selectedLimit = " + charLimit);
		adjustLimit();
		determineListName();
		generateBaseLists();
		baseString = getRandomWord();
		if (document.getElementById("containACapital").checked) {
			console.log("The base string before capitalizeFirstLetter is: " + baseString);
			baseString = capitalizeFirstLetter(baseString);
		}
		baseString = addAdditionalAppendage(baseString);
		displayName.textContent = "Your name is: " + baseString;
	}
}

function updateCharLimit(newLimit) {
	charLimit = newLimit;
	console.log("The charLimit was changed to: " + charLimit);
	adjustLimit();
	determineListName();
	generateBaseLists();
}

function adjustLimit() {
	limitAdjuster = 0;
	if(containANumber.checked) {
		limitAdjuster++;
		determineListName();
		generateBaseLists();

	}
	if(containASpecial.checked) {
		limitAdjuster++;
		determineListName();	
		generateBaseLists();

	}
}

function determineListName() {
	console.log("limitAdjuster = " + limitAdjuster);
	listName = "list" + (charLimit - limitAdjuster) + ".txt";
	//error catching
	if (listName == "list11.txt" && limitAdjuster == 0) {
		listName = "list10.txt";
	}
	if (limitAdjuster <= 1 && listName == "list12.txt") {
		listName = "list10.txt";
	}
}

function generateBaseLists() {
		$(document).ready(function() {

		    $.get(listName, function(data) {

			var lines = data.split('\n');
			
			for(var i=0;i<lines.length;i++) {
				if(listName == "list2.txt" && list2.length != lines.length) {
					list2.push(lines[i]);
				}
				if(listName == "list3.txt" && list3.length != lines.length) {
					list3.push(lines[i]);
				}
				if(listName == "list4.txt" && list4.length != lines.length) {
					list4.push(lines[i]);
				}
				if(listName == "list5.txt" && list5.length != lines.length) {
					list5.push(lines[i]);
				}
				if(listName == "list6.txt" && list6.length != lines.length) {
					list6.push(lines[i]);
				}
				if(listName == "list7.txt" && list7.length != lines.length) {
					list7.push(lines[i]);
				}
				if(listName == "list8.txt" && list8.length != lines.length) {
					list8.push(lines[i]);
				}
				if(listName == "list9.txt" && list9.length != lines.length) {
					list9.push(lines[i]);
				}
				if(listName == "list10.txt" && list10.length != lines.length) {
					list10.push(lines[i]);
				}
		    };
		    console.log("The list being filled is: " + listName);
		});
	})
}


function getRandomWord() {
		if(charLimit - limitAdjuster == 2) {
			console.log("The random word is: " + list2[Math.floor(Math.random() * list2.length)]);
			return list2[Math.floor(Math.random() * list2.length)];
		}
		if(charLimit - limitAdjuster == 3) {
			console.log("The random word is: " + list3[Math.floor(Math.random() * list3.length)]);
			return list3[Math.floor(Math.random() * list3.length)];
		}
		if(charLimit - limitAdjuster == 4) {
			console.log("The random word is: " + list4[Math.floor(Math.random() * list4.length)]);
			return list4[Math.floor(Math.random() * list4.length)];
		}
		if(charLimit - limitAdjuster == 5) {
			console.log("The random word is: " + list5[Math.floor(Math.random() * list5.length)]);
			return list5[Math.floor(Math.random() * list5.length)];
		}
		if(charLimit - limitAdjuster == 6) {
			console.log("The random word is: " + list6[Math.floor(Math.random() * list6.length)]);
			return list6[Math.floor(Math.random() * list6.length)];
		}
		if(charLimit - limitAdjuster == 7) {
			console.log("The random word is: " + list7[Math.floor(Math.random() * list7.length)]);
			return list7[Math.floor(Math.random() * list7.length)];
		}
		if(charLimit - limitAdjuster == 8) {
			console.log("The random word is: " + list8[Math.floor(Math.random() * list8.length)]);
			return list8[Math.floor(Math.random() * list8.length)];
		}
		if(charLimit - limitAdjuster == 9) {
			console.log("The random word is: " + list9[Math.floor(Math.random() * list9.length)]);
			return list9[Math.floor(Math.random() * list9.length)];
		}
		if(charLimit - limitAdjuster == 10) {
			console.log("The random word is: " + list10[Math.floor(Math.random() * list10.length)]);
			return list10[Math.floor(Math.random() * list10.length)];
		}
		return "Lets do each other a favour and either choose more name options, or lower the character limit. Lets just say it'll keep the 'bugs' in their cage.";
}

window.onload = function() {
	updateCharLimit(8);
	adjustLimit();
	determineListName();
	generateBaseLists();
}

//adds a number or special char as a prefix or suffix.
function addAdditionalAppendage(theName) {
	console.log("addAdditionalAppendage was called.");
	var number = getNumber();
	var specialChar = getSpecialChar();
	if(containANumber.checked){
		if(suffix.checked){
			theName += number;
		}	
		if(prefix.checked){
			theName = number+theName;
		}
	}
	if(containASpecial.checked) {
		if (ssuffix.checked) {
			theName += specialChar;
		} 
		else if (sprefix.checked) {
			theName = specialChar + theName;
		}
	}
	return theName; 
}

function capitalizeFirstLetter(capitalBaseString) {
	return capitalBaseString.charAt(0).toUpperCase() + capitalBaseString.slice(1);
}

function getSpecialChar() {
	var specialCharList = ["!","#", "$", "%", "&", "'", "*", "+", "-", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`",	"{", "|", "}", "~"];
	var sNumber = Math.floor(Math.random() * specialCharList.length);
	return specialCharList[sNumber];
}

//returns number from 0-9
function getNumber() {
	return Math.floor(Math.random() * 10);
}

//radio buttons for special characters
function setRadioSpecial() {
	if(containANumber.checked) {
		for(var i=0; i<radioSpecial.length; i++){
			radioSpecial[i].disabled = radioSpecial[i].enabled;	
		}
	}
	else {
		for(var i=0; i<radioSpecial.length; i++){
			radioSpecial[i].enabled = radioSpecial[i].disabled;	
		}
	}
}

//radio buttons for numbers
function setRadioNumbers() {
	if(containANumber.checked) {
		for(var i=0; i<radioNum.length; i++){
			radioNum[i].disabled = radioNum[i].enabled;	
		}
	}
	else {
		for(var i=0; i<radioNum.length; i++){
			radioNum[i].enabled = radioNum[i].disabled;	
		}
	}

}