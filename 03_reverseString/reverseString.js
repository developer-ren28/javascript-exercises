const reverseString = function(input) {

    let originalArray = input.split("");
    let reversedArray = input.split("");
    let j = 0;
  
    for (i = originalArray.length-1; i >= 0; i--) {
  
      reversedArray[j] = originalArray[i];
  
      j++;
        
    };
  
    return reversedArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
