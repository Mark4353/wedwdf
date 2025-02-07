const buttom = document.getElementById("myButton");
const result = document.getElementById("counter");
const text = document.querySelector(".main4-text");
const krash = document.querySelector(".krash");
const startButton = document.getElementById("startButton");

let count = 0;

buttom.addEventListener("click", function () {
    count += 100;
    result.textContent = `баланс: ${count}`;
    buttom.style.display = "none";
    text.style.display = "none";
  });

startButton.addEventListener("click", function() {
    for (let i = 1; i <= 999999999999; i++) {
        console.log(i);
    }
    console.log("Отсчет завершен! (если доживет)");
});