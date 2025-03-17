function camelize(str) {
    return str
        .split("-")
        .map(
            (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
            )
        .join("");
}


function filterRange(arr, a, b) {
    
    let result = arr.filter((num) => (num >= a) && (num <= b));

    return result;

}

