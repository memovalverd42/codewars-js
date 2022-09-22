const test_a1 = 'a clash of KINGS'; 
const test_a2 = 'a an the of';

function titleCase(title, minorWords) {
    const words = title.toLowerCase().split(" ");
    const minor_words = minorWords.toLowerCase().split(' ')

    words.map( element => {
        if(!minor_words.includes( element )) {
            element.split()[0]
        }
    })
    return words;
}

// console.log(titleCase(test_a1, test_a2));
const str = 'hola';
console.log(str.map(split()))
