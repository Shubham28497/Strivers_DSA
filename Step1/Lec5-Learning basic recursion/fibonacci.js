// Examples:
// Input : n = 2

// Output : 1

// Explanation : F(2) = F(1) + F(0) => 1 + 0 => 1.

// Input : n = 3

// Output : 2

// Explanation : F(3) = F(2) + F(1) => 1 + 1 => 2.
function fibonacci(n) {
    if (n <= 1) return n;                   // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive step
  }
  
  // Example
  console.log(fibonacci(5));  // Output: 5
  console.log(fibonacci(7));  // Output: 13
  