const sumAll = function (numA, numB) {

    let result = 0;

    if (numA > numB) {
        numB = [numA, numA = numB][0];
    }

    else if ((numA < 0 || numB < 0)
        || !Number.isInteger(numA)
        || !Number.isInteger(numB)) {
        return "ERROR"
    }

    for (let i = numA; i <= numB; i++) {
        result += i;
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
