const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const container = document.querySelector(".container");

noBtn.addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    let y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", function () {
    alert("Eatwell!");
    showConfetti();
});

function showConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById("confetti-container").appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}
