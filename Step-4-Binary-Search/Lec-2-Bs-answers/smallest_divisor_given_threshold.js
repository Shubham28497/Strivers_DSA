// Example 1:

// Input: nums = [1,2,5,9], threshold = 6
// Output: 5
// Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1. 
// If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2). 
// Example 2:

// Input: nums = [44,22,33,11,1], threshold = 5
// Output: 44

//1. Brute force approach
function smallestDivisor(arr,thershold) {
for(let divisor=1;divisor<=Math.max(...arr);divisor++){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=Math.ceil(arr[i]/divisor)
    }
    if(sum<=thershold){
        return divisor;
    }
}
}
let arr = [1,2,5,9];
let thershold=6;
console.log(smallestDivisor(arr,thershold));
//TC:O(n*max)