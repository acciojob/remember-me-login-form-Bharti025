//your JS code here. If required.
const btn=document.getElementById("submit");
let user=document.getElementById("username");
let password=document.getElementById("password");
let checkbox=document.getElementById("checkbox");
const loginbtn=document.getElementById("existing");
loginbtn.style.display='none';
let isLoggedIn="false";
function check(){
userValue=user.value;
passwordValue=password.value;
	if(!checkbox.checked){
		alert("Logged in as " + userValue);
	}
	else{
	isLoggedIn="true";
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
	alert("Hello"+userValue);
}

loginbtn.addEventListener("click",exist);
btn.addEventListener("click",check);