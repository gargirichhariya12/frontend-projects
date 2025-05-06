let  SignupBtn = document.getElementById("SignupBtn");
let LoginBtn = document.getElementById("LoginBtn");
let  nameField = document.getElementById("nameField");
let  title = document.getElementById("title");
LoginBtn.onclick = function(){
    nameField.style.maxHeight = "0" ;
    title.innerHTML="Log In";
    SignupBtn.classList.add("disable");
    LoginBtn.classList.remove("disable");
}
SignupBtn.onclick = function(){
    nameField.style.maxHeight = "60px" ;
    title.innerHTML="Sign Up";
    LoginBtn.classList.add("disable");
    SignupBtn.classList.remove("disable");
}