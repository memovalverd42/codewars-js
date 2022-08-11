const test1 = "Dermatoglyphics";
const test2 = "aba";
const test3 = "moOse";

function isIsogram(str){
    const set = new Set(str.toLowerCase());
    return str.length === set.size ? true : false;
}

console.log(isIsogram(test3));