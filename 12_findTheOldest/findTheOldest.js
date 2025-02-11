const findTheOldest = function (array) {

    let oldest = { age: 0 };



    for (let i = 0; i < array.length; i++) {


        if (!("yearOfDeath" in array[i])) {

            array[i].age = new Date().getFullYear() - array[i].yearOfBirth;

        }

        else {
            array[i].age = array[i].yearOfDeath - array[i].yearOfBirth
        }

        if (array[i].age > oldest.age) {

            oldest = array[i];

        }

    }


    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
