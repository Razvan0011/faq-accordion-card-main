let btn = document.querySelectorAll(".accordion");
let qst = document.querySelectorAll(".question");


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        // console.log("It works");
        btn[i].classList.toggle("show");

    });
}