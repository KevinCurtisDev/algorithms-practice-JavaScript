// Write a function that accepts a string.
// The function should capitalise the first letter of each word in the string.
// Return the capitalised string.


//BOILERPLATE
/*
const capitalise = str => {

    });
    console.log(newStr);
}
*/

//My solution
//I used map to create a new array returning a capitalised first letter of 
//each word concatinated to each sliced word with the first letter removed.

const capitalise = str => {
    strArray = str.split(" "); //split the string into an array
    let newStr = strArray.map(word => {
        //return the capitalised first letter of each word
        //concatenated to each word with the first leter removed
        return word[0].toUpperCase()+word
                .slice(1, word.length);
    });
    console.log(newStr.join(" "));// log the joined array as the new string
}


//TESTS
capitalise("hello, my name is kevin");
capitalise("Have you ever wondered why?.. no? me neither");
capitalise("1, 2, 3, 4, 5 once i caught a fish alive!");