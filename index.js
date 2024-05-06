let stars = document.querySelectorAll("i");
let message = document.querySelector(".final-message");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            if (index1 >= index2) {
                star.classList.add("colored");
                message.textContent = "Thank you! Your feedback is very important for us!"
            } else {
                star.classList.remove("colored")
            }
        })
    })
})