// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15
// 1.brute force approach
var numSubarraysWithSum = function(nums, goal) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        let sum=0;
        for(j=i;j<nums.length;j++){
            sum+=nums[j]
            if(sum===goal){
               count++
            }
        }
    }
    return count;
    
};
//TC: O(n^2)
//2. Window sliding alogirthm
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
   const atMost=(k)=>{
    if(k<0) return 0;
    let left=0 
     let sum=0; 
     let count=0;
    for(let right=0; right<nums.length; right++){
        sum+=nums[right]
        while(sum>k){
            sum-=nums[left++]
        }
        count+=right-left+1;
    }
    return count
   }
    return atMost(goal) - atMost(goal-1)
};