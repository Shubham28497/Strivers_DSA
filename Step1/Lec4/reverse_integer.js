// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
var reverse = function(x) {
    let rev = 0;
    let num = Math.abs(x);

    while (num > 0) {
        let ld = num % 10;
        rev = (rev * 10) + ld;
        num = Math.floor(num / 10);
    }

    if (x < 0) rev = -rev;

    // Check 32-bit signed integer range
    if (rev < -(2 ** 31) || rev > 2 ** 31 - 1) {
        return 0;
    }

    return rev;
};
