const a = [121, 144, 19, 161, 19, 144, 19, 11];  
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];


function comp(array1, array2){
    if(array1.length == array2.length) {
        const elementos = array2.map( Math.sqrt );
        return elementos.sort().join('') === array1.sort().join('');
    }
}

console.log(comp(a, b));