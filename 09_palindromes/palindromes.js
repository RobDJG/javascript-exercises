const palindromes = function (string) {

    punctuationArray = ["!", ".", ",", " "]

    originalString = string.toLowerCase()



    for (let i = 0; i < punctuationArray.length; i++) {

        if (originalString.includes(punctuationArray[i])) {
            originalString = originalString.replaceAll(punctuationArray[i], "");
        }

    }

    reversedString = originalString.split("").reverse().join("").toLowerCase()


    if (reversedString === originalString) {
        return true;
    }

    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
