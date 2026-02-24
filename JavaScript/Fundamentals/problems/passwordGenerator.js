const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generatePassword(length) {
    let result = "";

    for (let index = 0; index < length; index++) {
        const randomPosition = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomPosition];
        result = result + randomCharacter;
    }

    return result;
}

const password = generatePassword(12);
console.log("Generated password: " + password);