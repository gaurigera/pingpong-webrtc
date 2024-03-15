import { v4 as uuidv4 } from 'https://esm.sh/uuid';

const inputText = document.getElementById("code-readonly");
const copyTextBtn = document.getElementById("copy-btn")

function copyText() {
    copyText1(inputText.value)
}
copyTextBtn.addEventListener("click", () => {
    copyText()
})
function copyText1(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Text copied to clipboard successfully!");
        })
        .catch(err => {
            console.error("Failed to copy text to clipboard:", err);
        });
}

const generateBtn = document.getElementById("generate-code-btn");
generateBtn.addEventListener("click", () => {
    const roomCode = uuidv4();
    inputText.value = roomCode;
})
