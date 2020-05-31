const email = document.querySelector(".input-email");
const password = document.querySelector(".input-pass");
const form = document.querySelector(".userfield");
const passw=document.querySelector(".input-pass").value;
const nme=document.querySelector(".input-name");

function check(){
  if (email.checkValidity() && passw.match(/^[A-Za-z]\w{7,14}$/)){
    alert("Success");
    return true;
  }
  else{
    email.reportValidity();
    password.reportValidity(); 
    return false;  
  }
}
 



/*
function checkEmail(){
if (email.checkValidity()){
  return true;
}else{
  //email.setCustomValidity("Please Enter Valid Email")
  email.reportValidity();    
}
}


function checkPass(){
let passw=document.querySelector(".input-pass").value;
if (passw.match(/^[A-Za-z]\w{7,14}$/)){
  return true;
}else if(passw==""){
  alert("Password Can not be empty");
  return false;

}else{
  password.reportValidity(); 
  return false;    
}
}
*/