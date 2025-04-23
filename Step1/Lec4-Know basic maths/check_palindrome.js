// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, 
// it becomes 121-. Therefore it is not a palindrome.
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let reverse = 0;
    let xcopy = x;

    while (x > 0) {
        let ld = x%10
        reverse = (reverse * 10) +ld;
        x = Math.floor(x / 10);
    }

    return reverse === xcopy;    
};