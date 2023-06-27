let form = document.querySelector("#form");
let userName = document.querySelector("#name");
let namePop = document.querySelector(".name");
let password = document.querySelector("#password");
let passwordPop = document.querySelector(".password");
let confirm = document.querySelector("#confirm");
let confirmPop = document.querySelector(".confirm");
let body = document.querySelector("body");

form.addEventListener("submit",(event)=>{
  event.preventDefault();
  let name_len = userName.value.length;
  
  //Username-validation
  function userNameValidate(){
  if(userName.value==""){
   namePop.textContent = "Username cannot be blank";
   
  }
   else if(name_len<3 || name_len>25){
    namePop.textContent = "Username must be between  3 to 25 characters"
  }
else{
  namePop.textContent = "";
  userName.style.borderColor="#00a35b";
  userName.style.outline = "0";
  }
}

  //email-validation
  let email = document.querySelector("#email");
  let emailPop = document.querySelector(".email");
   function emailValidate(){
   if(email.value==""){
    emailPop.textContent = "Email cannot be blank"
  } 
  else if((typeof email.value[0] !== String) && !(email.value.includes("@")) ){
    emailPop.textContent = "Email is not valid"
  }
  else if(email.value.indexOf("@")<=0){
   emailPop.textContent = "Invalid @ position"
  }
  else if((typeof email.value[0] !== String) && !(email.value.includes(".")) ){
    emailPop.textContent = "Email is not valid"
  }
  else if (email.value.charAt(email.value.length-4)!=="." && email.value.charAt(email.value.length-3)!=="." ){
    emailPop.textContent = "Invalid . position"
  }
 else{
  emailPop.textContent = "";
  email.style.borderColor="#00a35b";
  email.style.outline = "0";
  email.style.backgroundColor="#ffffff";
  
 }
}


 //password-validation
function passwordValidate(password){
  const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@ %&!$*]).{4,15}$/;
  if(password==""){
    passwordPop.textContent="Password cannot be blank"
  }
  else if(regex.test(password)){
   passwordPop.textContent=" "
   password.style.borderColor="#00a35b";
    password.style.outline = "0";
  }
  else{
    passwordPop.textContent="Password must has atleast 8 characters that include atleast 1 lowercase character,1 uppercase character,1 number,and 1 special character in (!@#$%^&*)"
  }
  
}
function confirmfunc(){
  if(confirm.value=="") {
    confirmPop.textContent = "Please re-enter the password to confirm"
  }
  else if(password.value!==confirm.value){
    confirmPop.textContent = "Passwords didn't match.Please re-enter the correct password to match"
  
  }
  else{
    confirmPop.textContent="";
    body.textContent="Thanks for submitting the form,you are succesfully Signed Up!";
    body.style.color="#0000ff";
    body.style.fontSize="1em";
    body.style.textAlign="center";
  }
}


userNameValidate();
emailValidate();
passwordValidate(password.value);
confirmfunc(); 
});

