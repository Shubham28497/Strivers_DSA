// Input: nums = [-3, 2, 1], k=6

// Output: 0

// Explanation: There is no sub-array in the array that sums to 6. Therefore, the output is 0.
// 1.brute force approach
function longestSubarrayWithSumK(arr,k){
    let maxLength=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum=sum+arr[j]
            if(sum===k){
                maxLength=Math.max(maxLength,j-i+1)
            }
        }
    }
    return maxLength
}
let arr= [-3, 2, 1]
let k=6;
console.log(longestSubarrayWithSumK(arr,k))