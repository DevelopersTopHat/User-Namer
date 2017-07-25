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
	if(username.value){
		theName = username.value;
		if(theName.length + adjustLimit() > theLength){
			p.textContent = "Your name exceeds the character limit, adjust the character limit so that you can get your longer name.";
		}
		else {
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
				} else if (sprefix.checked) {
					theName = specialChar + theName;
				}
			} 

			p.textContent = "Your name is: " + theName;
			console.log("your name is "+ theName);
			nameArray.push(theName);
			displayNames();
		}
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

function hide(strlength){
	theLength = strlength;
}

//returns a special character
function getSpecialChar() {
	var specialCharList = ["!",	"#", "$", "%", "&", "'", "*", "+", "-", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`",	"{", "|", "}", "~"];
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
		var btn = document.createElement("BUTTON");        // Create a <button> element
		var t = document.createTextNode(nameArray[i]);     // Create a text node
		btn.appendChild(t);                                // Append the text to <button>
		document.getElementById("generatedNames").appendChild(btn);
		var br = document.createElement("br");
        document.getElementById("generatedNames").appendChild(br);
        nameArray.pop();
	}   

}