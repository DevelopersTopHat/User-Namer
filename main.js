var username = document.getElementById("username");
var p = document.querySelector("p");
var containANumber = document.getElementById("containANumber");
var radios = document.querySelectorAll("input[type='radio']");
var number;
var theName ="";
var theLength = 8;

function getBaseString() {
	number = Math.floor(Math.random() * 10);
	if(username.value){
		theName = username.value;
		if(theName.length > theLength){
			p.textContent = "too long";
		}
		else{
			if(containANumber.checked){
				if(suffix.checked){
						theName += number;
				}
				if(prefix.checked){
					theName = number+theName;
				}
			}
			p.textContent = "your name is "+theName;
		}
	}
}

function setRadioBtn() {
		for(var i=0; i<radios.length; i++){
			radios[i].disabled = !radios[i].disabled;
		}
}
function hide(strlength){
	theLength = strlength;
}