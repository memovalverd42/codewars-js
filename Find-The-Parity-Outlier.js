const test1 = [0, 1, 2]
const test2 = [1, 2, 3]
const test3 = [2, 4, 0, 100, 4, 11, 2602, 36]

function findOutlier(integers){
    const resultOdd = integers.filter( odd => odd % 2 === 0 );
    const resultEven = integers.filter( even => even % 2 !== 0 );

    return resultOdd.length === 1 ? resultOdd[0] : resultEven[0];
}

console.log(findOutlier(test3))