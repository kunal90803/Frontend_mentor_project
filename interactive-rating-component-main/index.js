let score=0;
let numberButton=document.querySelectorAll("nav button");

function handlescore(num,element){
    score=Number(num);
    numberButton.forEach((btn)=>{
        
        btn.classList.remove("active");
        
    })
    element.classList.add("active");
    document.querySelector("span").innerHTML=score;

}
function handleSubmit(){
    if(score>0){
        document.querySelector(".rating").classList.toggle("hide");
        document.querySelector(".starter").classList.toggle("hide");
    }
}


