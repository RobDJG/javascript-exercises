const palindromes = function (string) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let originalString = string
        .toLowerCase()
        .split("")
        .filter(char => alphanumerical.includes(char))
        .join("")




    let reversedString = originalString.split("").reverse().join("")


    return reversedString === originalString;

};

// Do not edit below this line
module.exports = palindromes;
