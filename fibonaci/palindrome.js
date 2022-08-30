function isPolindrome(str) {
    let reverseStr = '';
    let arrStr = str.split('');

    for(let i = str.length - 1; i >= 0; i--) {
        reverseStr += arrStr[i]
    }
    
    return reverseStr === str;
}

console.log(isPolindrome('KATAK'))
console.log(isPolindrome('APA'))
console.log(isPolindrome('IYA'))