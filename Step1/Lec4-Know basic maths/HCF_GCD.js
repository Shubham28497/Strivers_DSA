// Input: n1 = 4, n2 = 6

// Output: 2

// Explanation: Divisors of n1 = 1, 2, 4, Divisors of n2 = 1, 2, 3, 6

// Greatest Common divisor = 2.

//Brute Force
var findGCD = function(num1,num2){
    let gcd=1;
    let min=Math.min(num1,num2)
    for(let i=0;i<=min;i++){
        if(num1%i==0 && num2%i==0){
            gcd=i;
        }
    }
    return gcd;
}
let num1 = 10;
let num2 = 5;

console.log("HCF/GCD is:", findGCD(num1, num2)); 

//TC : O(min(a, b))

// What is the Euclidean Algorithm?
// It’s a method for finding the Greatest Common Divisor (GCD) of two numbers based on this idea:

// GCD(a, b) = GCD(b, a % b)
// Repeat this until b = 0. The result is a.

// a = 48, b = 18

// Step 1: 48 % 18 = 12         → GCD(48, 18) = GCD(18, 12)
// Step 2: 18 % 12 = 6          → GCD(18, 12) = GCD(12, 6)
// Step 3: 12 % 6 = 0           → GCD(12, 6) = GCD(6, 0)

// Now b = 0, so the GCD is a = 6
var findGCD = function(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp
    }
    return a
 }
 let a = 10;
 let b = 5;
 
 console.log("HCF/GCD is:", findGCD(a, b)); 

//  TC:O(log(min(a, b)))