function sumOfTripledEvens(arr) {

    return arr
        .filter((num) => num % 2 === 0)
        .map((num) => num * 3)
        .reduce((acc, curr) => acc + curr);

}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];