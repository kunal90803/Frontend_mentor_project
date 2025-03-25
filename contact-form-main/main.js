const clickButton=document.querySelector("button");
const errors=document.querySelectorAll(".error");
const firstName=document.querySelector("#firstname");
const lastName=document.querySelector("#lastname");
const emailID=document.querySelector("#emailId");
const message=document.querySelector("#message");
clickButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let isValid = true;
    if (firstName.value.trim() === "") {
        // errors[0].innerHTML = "This field is required";
        errors[0].style.display = "block"; 
        isValid = false;
    } 
    if (lastName.value.trim() === "") {
        // errors[0].innerHTML = "This field is required";
        errors[1].style.display = "block"; 
        isValid = false;
    } 
    if (emailId.value.trim() === "") {
        // errors[0].innerHTML = "This field is required";
        errors[2].style.display = "block"; 
        isValid = false;
    } 
    if (message.value.trim() === "") {
        // errors[0].innerHTML = "This field is required";
        errors[3].style.display = "block"; 
        isValid = false;
    } 
})