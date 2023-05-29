const findTheOldest = function(arr) {
    const date = new Date();
    const ordered = arr.sort((a, b) => {
        const previousPerson = (a.yearOfDeath || date.getFullYear()) - a.yearOfBirth;
        const nextPerson =  (b.yearOfDeath || date.getFullYear()) - b.yearOfBirth;
        return previousPerson > nextPerson ? -1 : 1;
    })
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
