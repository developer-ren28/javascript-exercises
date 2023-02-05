const sumAll = function(...numArray) {

    let sum = numArray[1];
    let firstIndex = numArray[0];
    let secondIndex = numArray[1];

    while(secondIndex !== firstIndex) {

        sum += firstIndex;
        firstIndex++;
        
    }; 

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
