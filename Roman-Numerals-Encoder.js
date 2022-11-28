
const romanParse = {
    'M' : 1000,
    'CM': 900,
    'D' : 500,
    'CD': 400,
    'C' : 100,
    'XC': 90,
    'L' : 50,
    'XL': 40,
    'X' : 10,
    'IX': 9, 
    'V' : 5,
    'IV': 4,
    'I' : 1,
};

function solution(number){
    let result = '';
    let keys = Object.keys(romanParse);

    keys.forEach(( romanNumber ) => {
        let part = '';
        const valRoman = romanParse[romanNumber];
        while(number >= valRoman){
            part += romanNumber;
            number -= valRoman;
        }
        result += part;
    });

    return {result};
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(9));
console.log(solution(10));
console.log(solution(11));
console.log(solution(19));
console.log(solution(22));
console.log(solution(1000));
console.log(solution(1001));
console.log(solution(1990));
console.log(solution(2007));
console.log(solution(2008));
