
var uniqueInOrder=function(iterable){

    if(typeof(iterable) === "string") {
        if( iterable === "") return [];
    } else {
        if(iterable.join() === "") return [];
    }
  
    let result = [];
    
    result.push(iterable[0]); 
    
    for(let i = 1; i < iterable.length; i++) {
        if(result[result.length - 1] !== iterable[i]) {
            result.push(iterable[i]);
        } 
    }
    return result;
}
console.log(uniqueInOrder([12.43, 343, 23.4, 23.4, 23.4, 23.4, 23.4, 45, 45, 23.4]))