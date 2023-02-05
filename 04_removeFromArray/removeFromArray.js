const removeFromArray = function(array, ...toRemove) {

    let i = 0;
    
    do {
        
        let remove = toRemove[i];

        for(j = 0; j < array.length; j++) {
        
            if (array[j] === remove) {
                array.splice(j, 1);
            };
        };

        i++;

    } while (i < toRemove.length);

    return array;


};

// Do not edit below this line
module.exports = removeFromArray;
