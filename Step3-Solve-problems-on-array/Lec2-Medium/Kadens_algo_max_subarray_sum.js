// Examples:
// Input: nums = [2, 3, 5, -2, 7, -4]
// Output: 15
// Explanation: The subarray from index 0 to index 4 has the largest sum = 15
// Input: nums = [-2, -3, -7, -2, -10, -4]
// Output: -2
// Explanation: The element on index 0 or index 3 make up the largest sum when taken as a subarray
function maxSubArraySum(arr){
    let maxSum=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=0;j<arr.length;j++){
            sum=sum+arr[j]
            if(sum>maxSum){
                maxSum=sum;
            }
        }
    }
    return maxSum
}
let arr= [2, 3, 5, -2, 7, -4]
console.log(maxSubArraySum(arr))
//TC:O(n^2)