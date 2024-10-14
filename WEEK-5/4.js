// Vifert Jenuben Daniel V - CH.EN.U4AIE21061

function isFirstCharacterUppercase(str) {
    return /^[A-Z]/.test(str);
}

// Example usage:
console.log(isFirstCharacterUppercase('Hello')); // Output: true
console.log(isFirstCharacterUppercase('hello')); // Output: false
