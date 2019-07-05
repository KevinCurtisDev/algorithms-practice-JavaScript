//TIME CONVERT

//Cretae a function that takes a number as an argument.
//Return the number of hours and minutes separated by a colon.



//BOILERPLATE

// const timeConvert = num => {
//     return `${hours}:${mins}`
// }



//My Solution
const timeConvert = num => {
    let hours = Math.floor(num / 60);
    let mins = num % 60;

    return `${hours}:${mins}`
}


//TESTS
console.log(timeConvert(300));
console.log(timeConvert(1));
console.log(timeConvert(31));
console.log(timeConvert(1251));
console.log(timeConvert(120));