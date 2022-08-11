const test1 = [1, 0, 0, 1];

const binaryArrayToNumber = arr => {
    const reves = arr.reverse();
    return  dec = reves.reduce((last, now, index) => {
        return now === 1 ? last + Math.pow(2, index) : last;
    });
};

console.log(binaryArrayToNumber(test1));