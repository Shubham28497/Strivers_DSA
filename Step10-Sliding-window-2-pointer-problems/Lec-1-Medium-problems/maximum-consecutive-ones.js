// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
function longestOnes(arr,k){
let left=0;
let maxOnes=0;
let zeroCount=0;
for(let right=0;right<arr.length;right++){
    if(arr[right]===0){
        zeroCount++
    }
    while(zeroCount>k){
        if(arr[left]===0){
            zeroCount--
        }
        left++
    }
    maxOnes=Math.max(maxOnes,right-left+1)
}
return maxOnes
}
let arr=[1,1,1,0,0,0,1,1,1,1,0] , k=2
console.log(longestOnes(arr,k))