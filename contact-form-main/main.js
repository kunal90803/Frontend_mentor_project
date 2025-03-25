const clickButton=document.querySelector("button");
const errors=document.querySelectorAll(".error");
const firstName=document.querySelector("#firstname");
const lastName=document.querySelector("#lastname");
const emailID=document.querySelector("#emailId");
const message=document.querySelector("#message");
const checkbox=document.querySelector("#concent");
const queryRadios = document.querySelectorAll('input[name="query"]');
const queryError = document.querySelector('.query .error'); 
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
clickButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let isValid = true;
    if (firstName.value.trim() === "") {
        // errors[0].innerHTML = "This field is required";
        errors[0].style.visibility = "visible";
        isValid = false;
    } 
    if (lastName.value.trim() === "") {
        // errors[1].innerHTML = "This field is required";
        errors[1].style.visibility = "visible";
        isValid = false;
    } 
    if (emailId.value.trim()   === "" || !pattern.test(emailId.value)) {
        // errors[2].innerHTML = "Please enter a valid email address";
        errors[2].style.visibility = "visible";
        isValid = false;
    } 
    if (message.value.trim() === "") {
        // errors[0].innerHTML = "This field is required";
        errors[4].style.visibility = "visible";
        isValid = false;
    } 
    if(!checkbox.checked){
        errors[5].style.visibility = "visible";
        isValid = false;
        document.querySelector(".final").style.marginBottom="5px";
    }

    let isSelected = false;

    // Loop through the radio buttons to check if any is selected
    queryRadios.forEach((radio) => {
        if (radio.checked) {
            isSelected = true;
        }
    });

    if (!isSelected) {
        queryError.style.visibility = "visible"; // Show error message
    } else {
        queryError.style.visibility = "hidden"; // Hide error message
    }

    if(isValid==true && isSelected==true){
        // alert("Form submitted");
        showToast();
    }
})

let toastBox=document.querySelector(".toastBox");
function showToast(){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = 'Thanks for completing the form we will be in touch soon';
    toastBox.appendChild(toast);
}
