const fibonacci = function(nthMember) {
    
    let member = +nthMember;

    if (nthMember < 0) {
        return 'OOPS';
    };
  
    let num = 1;
    let precedingNum = [1, 1];
    let sum = 1;
    let j = 0;

    for (i = 1; i < member; i++) {

        sum += num;
        precedingNum.push(sum);
        j++;
        num = precedingNum[j];
        
    };

    return num;
};

// Do not edit below this line
module.exports = fibonacci;
