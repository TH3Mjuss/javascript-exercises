const removeFromArray = function(...params) {

    const args = arguments.length - 1;
    let argsArray = [];

    // Get arguments as an Array
    for (i = 1; i <= args; i++) {
        argsArray.splice(1, 0, arguments[i]);
    } 

    let myArray = arguments[0];

    // Remove Arguments from array
    for (item in argsArray) {
        let toRemove = myArray.indexOf(argsArray[item]);
        if (toRemove == -1) { 
            continue
        } else {
            myArray.splice(toRemove, 1);
        } 
        
    }

    return myArray
};

// Do not edit below this line
module.exports = removeFromArray;
