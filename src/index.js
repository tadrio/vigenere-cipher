const $message = document.getElementById("message");
const $cipher = document.querySelector(".cipher");
const $field = document.querySelector(".area");
const $button = document.querySelector(".button");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let globalCipher = [];

$button.addEventListener("click", function () {
  globalCipher = [];
  transformCipher();
  $field.textContent = code($message.value);
});

const transformCipher = () => {
  const timesToConcat = Math.ceil($message.value.length / $cipher.value.length);
  for (let i = 0; i < timesToConcat; i++) {
    for (const letter of $cipher.value) {
      const indexOfCipher = alphabet.indexOf(letter);
      globalCipher.push(indexOfCipher);
    }
  }
}

const code = (message) => {
  let coded = "";
  for (let index = 0; index < message.length; index++) {
    const indexOfLetter = alphabet.indexOf(message[index]);
    const newLetter = alphabet[(indexOfLetter + globalCipher[index]) % alphabet.length]
    coded += newLetter;
  }
  return coded;
};