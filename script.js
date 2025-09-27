//your JS code here. If required.
const btn=document.getElementById("submit");
let user=document.getElementById("username");
let password=document.getElementById("password");
let checkbox=document.getElementById("checkbox");
const loginbtn=document.getElementById("existing");
loginbtn.style.display='none';
let isLoggedIn=false;

window.onload = function() {
    isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
        loginbtn.style.display = 'block';
        user.value = localStorage.getItem("name"); // Pre-fill username
    }
};

function check(){
let userValue=user.value;
let passwordValue=password.value;
	if(!checkbox.checked){
		alert("Logged in as " + userValue);
		isLoggedIn=false;
		localStorage.removeItem("isLoggedIn");
	}
	else{
	isLoggedIn=true;
     alert("Logged in as " + userValue);
	 localStorage.setItem("isLoggedIn",isLoggedIn);
    localStorage.setItem("name",userValue);
	localStorage.setItem("password",passwordValue);	
	}
}

if(isLoggedIn){
loginbtn.style.display='block';
}

function exist(){
	 const userValue = localStorage.getItem("name");
	alert("Hello "+userValue);
	localStorage.removeItem("isLoggedIn");
	loginbtn.style.display='none';
}

loginbtn.addEventListener("click",exist);
btn.addEventListener("click",check);
