const btns = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");
const allArticle = document.querySelector(".article");

allArticle.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    if (id) {
        btns.forEach(btn => {
            btn.classList.remove("active");
            event.target.classList.add("active");
        });

        contents.forEach( content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});