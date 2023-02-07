const sumAll = function(...numArray) {

    let sum = numArray[1];
    let firstIndex = numArray[0];
    let secondIndex = numArray[1];

    if (firstIndex < 0 || 
        secondIndex < 0 || 
        firstIndex !== (typeof 1) || 
        secondIndex !== (typeof 1)) {
        
            return "ERROR";
            
    } else if (firstIndex < secondIndex) {
        while(firstIndex !== secondIndex) {

            sum += firstIndex;
            firstIndex++;
            
        }; 
    
        return sum;

    } else if (firstIndex > secondIndex) {
        while(secondIndex !== firstIndex) {

            sum += firstIndex;
            firstIndex--;
            
        }; 
    
        return sum;
    }
    

};

// Do not edit below this line
module.exports = sumAll;
