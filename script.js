function validate(){
    let email = document.getElementById("email");
    let emailRegex =  /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    let errorOutput = document.getElementById("error")
if (email.value===""){
   errorOutput.textContent  = "Please provide a valid email address";
   errorOutput.style.color = "red";
   errorOutput.style.fontSize= "10px";
   errorOutput.style.textAlign= "initial";
   email.style.border = "1px solid red";
}
if (!(emailRegex.test(email.value))){
    errorOutput.textContent = "please enter a valid email address";
    errorOutput.style.fontSize= "10px";
    errorOutput.style.textAlign= "initial";
    errorOutput.style.color = "red";
    email.style.border = "1px solid red";
   }
else{
   errorOutput.textContent = "Email sent";
   errorOutput.style.color = "green";
   errorOutput.style.fontSize= "10px";
   errorOutput.style.textAlign= "";
   email.style.border = "1px solid green";
   }
    console.log(errorOutput)
}