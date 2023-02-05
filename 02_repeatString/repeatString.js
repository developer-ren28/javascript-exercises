const repeatString = function(string, num) {
    
    let word = "";

    for (i = 1; i <= num; i++) {
        word += string;
    };

    return word;
};

// Do not edit below this line
module.exports = repeatString;
