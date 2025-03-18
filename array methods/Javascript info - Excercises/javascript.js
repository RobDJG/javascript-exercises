function camelize(str) {
    return str
        .split("-")
        .map(
            (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
}


function filterRange(arr, a, b) {

    return arr.filter((num) => (num >= a) && (num <= b));

}

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {


        if (!(a <= arr[i] && arr[i] <= b)) {
            console.log(`${arr[i]} removed.`)
            arr.splice(i, 1);
            i--;

        }

    }

    console.log("hello from outside the loop")
}

