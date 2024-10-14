// Vifert Jenuben Daniel V - CH.EN.U4AIE21061

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
