const prompt_sync = require('prompt-sync');
const prompt = prompt_sync();
const numset = '0123456789';
const length = 10;

const bin = prompt("Enter the desired BIN: ");
const amount = prompt("Enter the amount of cards to generate: ")

function generateRandomString(length) {
    let result = '';
    const numsetLength = numset.length;
    for (let a = 0; a < length; a++) {
        result += numset.charAt(Math.floor(Math.random() * numsetLength));
    }
    return bin + result;
}

function generateCards(amount) {
    for (let b = 0; b < amount; b++) {
        console.log(generateRandomString(length));
    }
}

generateCards(amount);
