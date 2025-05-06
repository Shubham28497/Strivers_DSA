// Input : s = "hannah"
// Output : true
// Explanation : The string when reversed is --> "hannah", which is same as original string , so we return true.
// Input : s = "aabbaaa"
// Output : false
// Explanation : The string when reversed is --> "aaabbaa", which is not same as original string, So we return false.
function checkPalindromeString(str,i=0){
    n=str.length;
if(i>=Math.floor(n/2)) return true;
if(str[i]!==str[n-i-1]) return false;
return checkPalindromeString(str,i+1)
}
console.log(checkPalindromeString("madam"));  // true
console.log(checkPalindromeString("hello"));  // false

