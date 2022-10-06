const repeatString = function(str, num) {
    let newStr = '';
    
    if (num < 0) {
        return 'ERROR'
    } else {
        while (num > 0) {
            newStr += str;
            num -= 1;
        }
        return newStr;
    }

};

// Do not edit below this line
module.exports = repeatString;
