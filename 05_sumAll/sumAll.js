const sumAll = function(nb1, nb2) {
    if (nb1 < 0 || nb2 < 0 || typeof(nb1) != 'number' || typeof(nb2) != 'number') {
        return "ERROR"
    } else {
        let greatestNb = 0;
        let smalestNb = 0;
        let nbSum = 0;
        if (nb1 > nb2) {
            greatestNb = nb1;
            smalestNb = nb2;
        } else { 
            greatestNb = nb2;
            smalestNb = nb1;
        }
        
        for (i = smalestNb; i <= greatestNb; i++) {
            nbSum += i;
        }
        console.log("SUM: " + nbSum);
        return nbSum
    }
};

// Do not edit below this line
module.exports = sumAll;
