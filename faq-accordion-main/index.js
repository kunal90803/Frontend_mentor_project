const btn = document.querySelectorAll(".btn");
const para = document.querySelectorAll("p");
para.forEach((p) => {
    p.classList.add('hide');
});

btn.forEach((button) => {
    button.addEventListener("click", () => {
        

        
        const target = button.getAttribute('data-target');
        const targetPara = document.querySelector(`.${target}`); // Corrected variable name
        if(!targetPara.classList.contains('hide')){
            targetPara.classList.add('hide');
            button.setAttribute("src","./assets/images/icon-plus.svg")
            return;
        }
        
        
        
        para.forEach((p) => {
            p.classList.add('hide');
           
        });

        
        targetPara.classList.remove('hide');
        button.setAttribute("src","./assets/images/icon-minus.svg")

        
        
    });
});
