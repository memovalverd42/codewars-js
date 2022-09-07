const test1_a  = [1,2,3];
const test1_b  = [1, 2];

function arrayDiff(a, b) {
  return a.filter( element => !b.includes(element));
}

console.log(arrayDiff(test1_a, test1_b));

