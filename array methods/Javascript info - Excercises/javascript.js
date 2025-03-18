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
}

function decreasedOrderSort(arr) {

    arr.sort((a, b) => b - a)

}

function copySorted(arr) {
    return arr.slice().sort()
}


function sortByAge(users) {

    users.sort((a, b) => a.age - b.age);

}

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    console.log(array)
}

function getAverageAge(users) {

    return Math.floor(users.reduce((total, user) => total += user.age, 0) / users.length)

}

function unique(arr) {
    
    let result = [];

    for (let i = 0; i < arr.length ; i++){
        if (!(result.includes(arr[i]))){
            result.push(arr[i])
        }
    }

    return result;

}


let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

