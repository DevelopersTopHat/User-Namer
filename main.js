var username = document.getElementById("username");
var p = document.querySelector("p");
var generatedNames = document.getElementById("generatedNames");

var containANumber = document.getElementById("containANumber");
var containASpecial = document.getElementById("containASpecial");

var radioNum = [document.getElementById("prefix"), document.getElementById("suffix")];
var radioSpecial = [document.getElementById("sprefix"), document.getElementById("ssuffix")];

var nameArray = [];

var number;
var specialChar;

var theName ="";
var theLength = 8;
var submit = document.querySelector("input[type='submit']");

var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];
var list9 = [];
var list10 = [];

var listSelector;
var nameLength;
var placeholder = "";
var fileLength;

submit.addEventListener("click", getBaseString);
containANumber.addEventListener("click", setRadioBtn);
containASpecial.addEventListener("click", setRadioSpecial)

username.addEventListener("keypress",function(e){
	if(e.which === 13 ){
		getBaseString();	
	}
});



function getBaseString() {
	console.log("get base string");
	number = Math.floor(Math.random() * 10);
	specialChar = getSpecialChar();
	nameLength = theLength - adjustLimit();
	if(username.value){
		theName = username.value;
		
		if(theName.length+adjustLimit() > theLength){
			p.textContent = "Your name exceeds the character limit, adjust the character limit so that you can get your longer name.";
		}
		
		if(theName.length+adjustLimit() < theLength){
			chooseList(nameLength);
			getList();
			getRandomWord(fileLength);
			theName = placeholder;
			if (containACapital.checked) {
				theName = capitalizeFirstLetter(theName);
			}
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

			p.textContent = "Your name is: " + theName+chooseList(nameLength-theName.length);
			console.log("your name is "+ theName);
			/*
			nameArray.push(theName);
			displayNames(); */

		}
	}
	else {
			chooseList(nameLength-adjustLimit());
			getList();
			getRandomWord(fileLength);
			theName = placeholder;
			if (containACapital.checked) {
				theName = capitalizeFirstLetter(theName);
			}
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
			
			p.textContent = "Your name is: " + theName;
			console.log("your name is "+ theName);
			/*
			nameArray.push(theName);
			displayNames(); */
		
	}

}

//radio buttons for numbers
function setRadioBtn() {
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

//updates character length based on selector
function hide(strlength){
	theLength = strlength;
}

//returns a special character
function getSpecialChar() {
	var specialCharList = ["!","#", "$", "%", "&", "'", "*", "+", "-", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`",	"{", "|", "}", "~"];
	var sNumber = Math.floor(Math.random() * specialCharList.length);
	return specialCharList[sNumber];
}

//capitalizes the first letter of the string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//function that helps set character limit
function adjustLimit() {
	var limit = 0;
	if (containANumber.checked) {
		limit++;
	} 
	if (containASpecial.checked) {
		limit++;
	}
	if (limit < 0) {
		return 0;
	}
	return limit;
}

function displayNames() {
	for (var i = 0; i < nameArray.length; i++) {
		var btn = document.createElement("BUTTON");        
		var t = document.createTextNode(nameArray[i]);
		btn.appendChild(t);                                
		document.getElementById("generatedNames").appendChild(btn).classList.add('myButton');
		var br = document.createElement("br");
        	document.getElementById("generatedNames").appendChild(br);
		var br2 = document.createElement("br");
		document.getElementById("generatedNames").appendChild(br2);
        	nameArray.pop();
	}   

}

function chooseList(nameLength) {
	listSelector = "list" + nameLength + ".txt";
}

//selects file
function getList() {
	$(document).ready(function() {
	    //fetch text file
	    $.get(listSelector, function(data) {

		//split on new lines
		var lines = data.split('\n');
		//create select
		var dropdown = $('<select>');
		//iterate over lines of file and create a option element
		for(var i=0;i<lines.length;i++) {
			if(nameLength == 2) {
				list2.push(lines[i]);
			}
			if(nameLength == 3) {
				list3.push(lines[i]);
			}
			if(nameLength == 4) {
				list4.push(lines[i]);
			}
			if(nameLength == 5) {
				list5.push(lines[i]);
			}
			if(nameLength == 6) {
				list6.push(lines[i]);
			}
			if(nameLength == 7) {
				list7.push(lines[i]);
			}
			if(nameLength == 8) {
				list8.push(lines[i]);
			}
			if(nameLength == 9) {
				list9.push(lines[i]);
			}
			if(nameLength == 10) {
				list10.push(lines[i]);
			}
		    
		}
		fileLength = lines.length;
	    });
	});
}

function getRandomWord(linesLength) {
	var randomWord = Math.floor(Math.random() * linesLength);
			if(list2.length > 0) {
				console.log(list2[randomWord]);
				return list2[randomWord];
			}
			if(list3.length > 0) {
				console.log(list3[randomWord]);
				placeholder = list3[randomWord];
			}
			if(list4.length > 0) {
				placeholder = list4[randomWord];
			}
			if(list5.length > 0) {
				placeholder = list5[randomWord];
			}
			if(list6.length > 0) {
				placeholder = list6[randomWord];
			}
			if(list7.length > 0) {
				placeholder = list7[randomWord];
			}
			if(list8.length > 0) {
				placeholder = list8[randomWord];
			}
			if(list9.length > 0) {
				placeholder = list9[randomWord];
			}
			if(list10.length > 0) {
				placeholder = list10[randomWord];
			}

}
