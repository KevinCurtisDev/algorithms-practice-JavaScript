//CAESER CIPHER
//Create a function that takes two value. The first value should be a string of letters.
//The second value should be a number that can range from 0 to 26.
//The function should move each letter in the provided string the number spaces to the right in the alphabet of the number value entered.
//For example, with a shift of 1, A would be replaced by B, B would become C, and so on.


//BOILERPLATE

// const cipher = (chars, offsetNum) => {
    
// }


//My Solution
const aToZ = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 
    'o', 'p', 'q', 'r', 's', 't', 'u', 
    'v', 'w', 'x', 'y', 'z'
]

const cipher = (chars, offsetNum) => {
    charsArray = chars.toLowerCase().split("");
    let ciphered = charsArray.map(letter => {
        if(offsetNum > 1){
            let idx = aToZ.indexOf(letter) + offsetNum - 1;
            if (idx > 25) {
                return aToZ[idx - 26];
            }
            return aToZ[idx];
        } else {
            let idx = aToZ.indexOf(letter) + offsetNum
            if (idx > 25) {
                return aToZ[idx - 26];
            }
            return aToZ[idx];
        }       
    })
    return ciphered.join("");
}


//TEST
console.log(cipher('Xyz', 10))
console.log(cipher('sdhfboa', 1))
console.log(cipher('adbmes', 0))
console.log(cipher('XyzHCJNsdbuIO', 25))