const leapYears = function(year) {
    let diviseBy4 = year / 4;
    let diviseBy100 = year / 100;
    let diviseBy400 = year / 400;

    if (Number.isInteger(diviseBy100) && Number.isInteger(diviseBy400)) {
        return true
    } else if (Number.isInteger(diviseBy4) && Number.isInteger(diviseBy400)) { 
        return true
    } else if (Number.isInteger(diviseBy4) && !(Number.isInteger(diviseBy100))) { 
        return true 
    } else { return false}
};

// Do not edit below this line
module.exports = leapYears;
