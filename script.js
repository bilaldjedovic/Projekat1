function createSmile() {
    const smile = document.createElement("div");
    smile.classList.add("smile");

    smile.style.left = Math.random() * 100 + "vw";
    smile.style.animationDuration = Math.random() * 2 + 3 + "s";

    smile.innerText = "😀";

    document.body.appendChild(smile);

    setTimeout(() => {
        smile.remove();
    }, 5000);
}

setInterval(createSmile, 300);


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 150 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 4 + "s";

    heart.innerText = "💜";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);


function createLaugh() {
    const laugh = document.createElement("div");
    laugh.classList.add("laugh");

   laugh.style.left = Math.random() * 150 + "vw";
    laugh.style.animationDuration = Math.random() * 4 + 4 + "s";

    laugh.innerText = "😂";

    document.body.appendChild(laugh);

    setTimeout(() => {
        laugh.remove();
    }, 5000);
}

setInterval(createLaugh, 300);