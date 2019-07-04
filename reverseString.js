//REVERSE A STRING

//Create a function that accepts one string argument.
//The function should return the reverse of the inputted string.


//BOILERPLATE

// const reverseString = str => {

//     return str;
// }



//My Solution
const reverseString = str => {
    let newstr = str.split("").reverse().join("");
    return newstr;
}


//TESTS
console.log(reverseString('hello world'));
console.log(reverseString('Algorithm challenges rock'));
console.log(reverseString('Brain melting music'));
console.log(reverseString('); emosewa kool uoy'));
