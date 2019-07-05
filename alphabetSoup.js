//ALPHBET SOUP
//Crete a function that takes a string as an argument. 
//the function should return the string in alphabetic order, ignoring ymbols and numbers.




//BOILERPLATE

// const alphabetSoup = str => {
//     return str
// }




//My Solution
const alphabetSoup = str => {
    return str.replace(/[^a-zA-Z]|_/g, "").split('').sort().join('');
}

//TEST
console.log(alphabetSoup("hvbius!!-05968/fiu"));
console.log(alphabetSoup("fedC-/?b!..}A"));
console.log(alphabetSoup("hello world"));
