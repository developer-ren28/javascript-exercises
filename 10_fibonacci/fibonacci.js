const fibonacci = function(nthMember) {
    let num = 1;
    let precedingNum = [1, 1];
    let sum = 1;
    let j = 0;

    for (i = 1; i < nthMember; i++) {

        sum += num;
        precedingNum.push(sum);
        j++;
        num = precedingNum[j];
        
    };

    return num;
};

// Do not edit below this line
module.exports = fibonacci;
