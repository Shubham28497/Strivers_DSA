// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.
// Return the number of nice sub-arrays.
// Example 1:
// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
// Example 2:
// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There are no odd numbers in the array.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const atMost=(k)=>{
    if(k<0) return 0;
    let left=0 
     let sum=0; 
     let count=0;
    for(let right=0; right<nums.length; right++){
        if(nums[right]%2==1) sum+=1
        while(sum>k){
           if(nums[left]%2==1) sum-=1
           left++
        }
        count+=right-left+1;
    }
    return count
   }
    return atMost(k) - atMost(k-1)
};
//TC: O(n)