const fibonacci = function (num) {

    if (num < 0) {
        return "OOPS"
    }

    else if (num == 0) {
        return 0
    }

    else {

        let previousNum = 0;
        let result = 1;
        let temp;
        num = Number(num)

        for (let i = 1; i < num; i++) {

            temp = result;

            result += previousNum;

            previousNum = temp;


        }

        return result;

    }

};

// Do not edit below this line
module.exports = fibonacci;
