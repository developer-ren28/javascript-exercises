const fibonacci = function(nthMember) {
    if (nthMember < 0) {
        return 'OOPS';
    };

    let arr = [1, 1];
    let i = 0;
    let j = 1;
    while(nthMember > arr.length) {
        let x = arr[i] + arr[j];
        arr.push(x);
        i++;
        j++;
    }

    return arr[nthMember - 1];
};

// Do not edit below this line
module.exports = fibonacci;
