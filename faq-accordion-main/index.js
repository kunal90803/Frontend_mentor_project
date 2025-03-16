const para = document.querySelectorAll("p");
para.forEach((p) => {
  p.classList.add("hide");
});

const btn = document.querySelectorAll(".btn");
const h3s = document.querySelectorAll(".ques");
function toggleAnswer(button, targetPara) {
  const target = button.getAttribute("data-target");

  if (!targetPara.classList.contains("hide")) {
    targetPara.classList.add("hide");

    button.setAttribute("src", "./assets/images/icon-plus.svg");
    return;
  }

  para.forEach((p) => {
    p.classList.add("hide");
  });

  btn.forEach((button) => {
    button.setAttribute("src", "./assets/images/icon-plus.svg");
  });

  targetPara.classList.remove("hide");
  button.setAttribute("src", "./assets/images/icon-minus.svg");
}

btn.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");
    const targetPara = document.querySelector(`.${target}`);

    toggleAnswer(button, targetPara);
  });
});

h3s.forEach((h3) => {
  h3.addEventListener("click", () => {
    const target = h3.getAttribute("data-target");
    const targetPara = document.querySelector(`.${target}`);
    const associatedBtn = document.querySelector(
      `.btn[data-target="${target}"]`
    );

    toggleAnswer(associatedBtn, targetPara);
  });
});
