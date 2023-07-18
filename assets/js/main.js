"use strict";

let morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: "    " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." },
];

const morseForm = document.querySelector(".morse_form");
const textInput = document.querySelector("#text_to_encrypt");
const encryptContainer = document.querySelector(".encrypted_container");
const encryptBtn = document.querySelector(".encrypt_btn");
const encryptTogether = document.querySelector(".encrypt_together");

morseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  encryptContainer.innerHTML = "";

  const textInputValue = textInput.value.toUpperCase();

  textInputValue.split("").forEach((letter) => {
    morseAlphabet.forEach((letterObject) => {
      if (letterObject.letter === letter) {
        const outputTag =
          letter === " "
            ? `<br>`
            : `
        <p>${letter} = ${letterObject.morseCode}</p>
        `;
        letter === " "
          ? (encryptTogether.textContent += "///")
          : (encryptTogether.textContent += `${letterObject.morseCode} `);
        encryptContainer.insertAdjacentHTML("beforeend", outputTag);

        return;
      }
    });
  });
});
