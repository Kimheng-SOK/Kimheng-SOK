const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Okay, See yahhhh:)!!"
    gif.src = "https://i.pinimg.com/originals/af/4b/30/af4b30b3c5cb7babbf93d6f50df4edad.gif";
})
noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.top = randomY + "px";
    noBtn.style.left = randomX + "px";
})
