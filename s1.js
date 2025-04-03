const arr = [1, 2, 3, 3, 5, 5, 6, 7, 8, 8];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); 

function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));


function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstLetter("hi hello"));