const palindromes = function (string) {
    
    let stringArray = string.toLowerCase().match(/[a-z]/ig);
    let i = 0;
    let j = stringArray.length-1;

    while (i < stringArray.length) {
      
      if (stringArray[i] !== stringArray[j]) {
            return false;
        };

        i++
        j--;

    };

    return true;

};

// Do not edit below this line
module.exports = palindromes;
