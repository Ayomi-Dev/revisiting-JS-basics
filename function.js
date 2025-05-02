//1. Using function as variable value
const amount = toNaira(45);
function toNaira(amountInDollar){
    return amountInDollar * 1600;
}
const balance = 'my balance is ' + amount + ' naira';
console.log(balance); //prints 'My balance is 72000 naira

//2. Afunction to add  two numbers together
function add(a, b){
    return a + b
}
console.log(add(2,3)) //prints 5


//3. A function to check for even or odd numbers
function isEven(n){
    if (n%2 === 0) {
        return true
    }
    else{
        return false
    }
}
console.log(isEven(2))  //prints true



// 4. A function that checks for the largest number
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


//5. A function that reverses a string
const reversedString = (str)=> {
    return str.split('').reverse().join('')
}
console.log(reversedString('baby'));  //prints ybab


// 6. A function that returns a factorial - A recursuve function
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

console.log(factorial(5)) //prints 120