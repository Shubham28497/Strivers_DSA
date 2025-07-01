// Given an integer array nums and an integer k, split nums into k non-empty
//  subarrays such that the largest sum of any subarray is minimized.
// Return the minimized largest sum of the split.
// A subarray is a contiguous part of the array.
// Example 1:

// Input: nums = [7,2,5,10,8], k = 2
// Output: 18
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
// Example 2:

// Input: nums = [1,2,3,4,5], k = 2
// Output: 9
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.
function splitArray(nums,k){
    let n=nums.length;
    let left=Math.max(...nums)
    let right=nums.reduce((acc,num)=>acc+num,0)
        // Binary search for the minimum possible largest sum
    while(left<right){
        let mid=Math.floor((left+right)/2)
        let subArrayCount=1;
        let currSum=0;
        for(let i=0;i<n;i++){
            if(currSum+nums[i]>mid){
                subArrayCount+=1;
                currSum=nums[i]
            }
            else{
                currSum+=nums[i]
            }
        }
        if(subArrayCount>k){
            left=mid+1;
        }
        else{
            right=mid;
        }
    }
    return left;
}
console.log(splitArray([7, 2, 5, 10, 8], 2));
//TC: O(nlog(sum-max))
