

function toCamelCase(str){
    let list_str = str.includes('-') ? str.split('-') : str.split('_');
    for(let i = 1; i < list_str.length; i++) {
        list_str[i] = list_str[i].charAt(0).toUpperCase() + list_str[i].slice(1);
    }
    return list_str.join('');
}

