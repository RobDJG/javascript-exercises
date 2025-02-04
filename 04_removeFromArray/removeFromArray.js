const removeFromArray = function (array, ...itemsToRemove) {

    let result = Array.from(array)

    for (let element of itemsToRemove) {

        let removeIndex = result.indexOf(element);

        if (removeIndex === -1) {
            continue
        }

        while (removeIndex != -1) {

            result.splice(removeIndex, 1)

            removeIndex = result.indexOf(element);

        }


    }

    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
