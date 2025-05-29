// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
function largestOddNumber (num){
for(let i=num.length-1;i>=0;i--){
    let digit=parseInt(num[i])
    if(digit%2===1){
        return num.slice(0,i+1)
    }
}
return ""
}
let num = "4206"
console.log(largestOddNumber(num))
// console.log("Output:", `"${largestOddNumber(num)}"`);

