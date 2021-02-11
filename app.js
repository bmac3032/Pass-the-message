// UI Variables
const message = document.getElementById("message"),
  btn = document.getElementById("btn"),
  prevMessage = document.getElementById("prevMessage");

function updateUI() {
  console.log(message.value);
  prevMessage.innerText = message.value;
  message.value = "";
}

btn.addEventListener("click", () => {
  updateUI();
});
