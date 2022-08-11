const test1 = [1,2,'a','b'];
const test2 = [1,2,'aasf','1','123',123];

function filter_list(l) {

    return l.filter( element => typeof(element) === "number");

}

console.log(filter_list(test2));