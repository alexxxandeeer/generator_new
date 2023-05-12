const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

let generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000 + 1);
    number.innerHTML = randomNumber;
}

btn.addEventListener("click", generateNumber);
generateNumber();



