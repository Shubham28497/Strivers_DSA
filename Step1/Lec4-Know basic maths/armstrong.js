// Input: n = 153

// Output: true

// Explanation: Number of digits : 3.

// 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153.

// Therefore, it is an Armstrong number

var isArmstrong = function (x) {
    let count = 0;
    let temp = x;

    // Step 1: Count the number of digits
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        count++;
    }

    // Step 2: Compute sum of digits raised to 'count' power
    temp = x;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, count);
        temp = Math.floor(temp / 10);
    }

    // Step 3: Return result
    return sum === x;
};
console.log(isArmstrong(153));
console.log(isArmstrong(9474));
console.log(isArmstrong(370));
console.log(isArmstrong(123))