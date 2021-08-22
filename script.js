function validate(){
    let email = document.getElementById("email");
    let emailRegex =  /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    let errorOutput = document.getElementById("error")
if (email.value===""){
   errorOutput.textContent  = "Please provide a valid Email";
   errorOutput.style.color = "red";
   email.style.border = "1px solid red"
}
if (!emailRegex.test(email.value)){
    errorOutput = "Enter a valid email"
   }
else{
   errorOutput = "Email sent"
   }
   

    console.log(errorOutput)
}