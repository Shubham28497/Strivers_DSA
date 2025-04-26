// Input: n = 5

// Output: true

// Explanation: The only divisors of 5 are 1 and 5 , So the number 5 is prime.

var isPrime = function(n) {
    if (n <= 1) return false;          // 0 and 1 are not prime

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; // Found a divisor other than 1 and n
    }

    return true;
};

console.log(isPrime(5));  // Output: true
