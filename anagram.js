// ANAGRAM CHALLENGE
// 1. Check if one string is an anagram of another string.
// 2. A string, in this instance can consist of letters and numbers.
// 3. You should ignore white space and any none alphanumeric characters when comparing strings.


//Boilerplate
/*
const anagram = (str1, str2) => {


    return str1 === str2; // check if the two string match each other
}
*/


const anagram = (str1, str2) => {
    nstr1 = str1.replace(/[^\w\s]|_/g, "") // remove none alphanumeric characters
        .replace(/\s+/g, "") // remove spaces
        .toLowerCase() // lowercase the string
        .split('') // split into an array
        .sort() // sort the array
        .join(); // join back into a string

    nstr2 = str2.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, "")
        .toLowerCase()
        .split('')
        .sort()
        .join();
    
    return nstr1 === nstr2; // check if the two string match each other
}

//tests
console.log(anagram('hi you!!', 'hi'));
console.log(anagram("what's going on with you?", "What's going on with you"));
console.log(anagram('h e l l o o o', 'ololo--+ He)[]}'));
console.log(anagram('aBcdEFgHiJK', '.Ab.dC!!feG;/hIjK\][{'));
console.log(anagram('aBcdEFgHiJK', '.Ab.dC/hIjK\][{'));