
const test1 = "4556364607935616";
const test2 = "1";
const test3 = ""; 
const test4 = "Skippy";

function maskify(cc) {
    const array = cc.split('');
    for(let i = 0; i < array.length - 4; i++) {
        array[i] = '#';
    }
    return array.join('');
}
console.log(maskify(test4));
// console.log(array);