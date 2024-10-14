// Vifert Jenuben Daniel V - CH.EN.U4AIE21061

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage:
console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(2023)); // Output: false
