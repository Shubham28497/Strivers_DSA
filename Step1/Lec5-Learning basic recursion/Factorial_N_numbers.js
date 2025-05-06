// Examples:
// Input: n = 2

// Output: 2

// Explanation: 2! = 1 * 2 = 2.

function factorial(n){
    if(n===0) return 1;
    return n*factorial(n-1)
}
console.log(factorial(4))