console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("form"); // Fill the selector for the login element in ""
let login_text = login_element.innerText.split(' ');

let ans = null;
if(login_text.length == 17){
	question = login_text.slice(8, 11);
	
	if (login_text[6] == 'first')
		ans = question[0];
	else
		ans = question[2];
}
else{
	question = login_text.slice(6, 9); // Use split and array operations on the login_text string to extract the question


	if(question[1] == '+'){
		ans = Number(question[0]) + Number(question[2]);
	}

	else if(question[1] == '-'){
		ans = Number(question[0]) - Number(question[2]);
	}

	else{
		ans = Number(question[0]);
	}
}

let answer = ""+ans; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

const captcha_input_element = document.querySelectorAll("input")[3]; // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;

// CLick the login button
/*
const login = document.getElementById('loginbtn');
login.click();
*/