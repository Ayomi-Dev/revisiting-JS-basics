// //#1. Using function as variable value
const amount = toNaira(45);
function toNaira(amountInDollar){
    return amountInDollar * 1600;
}
const balance = 'my balance is ' + amount + ' naira';
console.log(balance); //prints 'My balance is 72000 naira

//#2. Afunction to add  two numbers together
function add(a, b){
    return a + b
}
console.log(add(2,3)) //prints 5


//#3. A function to check for even or odd numbers
function isEven(n){
    if (n%2 === 0) {
        return true
    }
    else{
        return false
    }
}
console.log(isEven(2))  //prints true



//#4. A function that checks for the largest number
const maxOfThree = (a,b,c) => {
    return Math.max(a,b,c)
}
// Alternatively, using conditionals
function maxOfThree(a,b,c){
    if(a >= b && a >= c ){
        return a
    }
    else if(b >= c && b >= a){
        return b
    }
    else{
        return c
    }
}
console.log(maxOfThree(4,7,5));  //prints 7


//#5. A function that reverses a string
const reversedString = (str)=> {
    return str.split('').reverse().join('')
}
// console.log(reversedString('baby'));  //prints ybab


//#6. A function that returns a factorial - A recursuve function
function factorial(n){
    if(n === 0 || n === 1) return 1
    return n * factorial(n-1)
}

//Alternatively, using loop
function factorial(n){
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i 
    }
    return result
}

// console.log(factorial(5)) //prints 120

//#7 A function that checks if a string is the same as if it is reversed 
const isPalindrome = (str) => {
    if(str.split('').reverse().join('').toLowerCase() === str.toLowerCase()) return true
    return false;
}

console.log(isPalindrome("Racecar")); //prints true

//#8 A function that counts the number of vowel in a given string
const findVowels = (str) => {
    const vowels =  str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}
// console.log(findVowels("apple"));

//#9 A function that finds duplicates in a list
function findDuplicates(arr){
    const seenElement = new Set(); //a set that stores an element seen at least once
    //The Set() constructor creates and stores an array of unique values only
    const duplicateElement = new Set();  //a set that stores elements tht has been seen before

    for(let element of arr ){  // cycling through elements in the array one by one to identify the ones seen and duplicated elements
        seenElement.has(element) ? duplicateElement.add(element) : seenElement.add(element);
    }
    return Array.from(duplicateElement); //creates an array of the duplicate element

}
// console.log(findDuplicates(["a","b","b","c","d","d"])) //prints ["b","d"]

//#10 A function  that capaitalizes the first letter of each word in a string
const capitalizeFirstLetter = (str) => {
    return str.split(' ') //splits the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //capitalizes the first letter of each word and joins the rest of the word
        .join(' '); //joins the array of words back into a string
}
// Alternatively, using a for loop
function capitalizeFirstLetter(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
console.log(capitalizeFirstLetter("i love jesus")); //prints "I Love Jesus"
