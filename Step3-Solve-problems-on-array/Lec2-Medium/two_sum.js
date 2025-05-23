// Examples:
// Input: nums = [1, 6, 2, 10, 3], target = 7
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 1 + 6 = 7
// Input: nums = [1, 3, 5, -7, 6, -3], target = 0
// Output: [1, 5]
// Explanation: nums[1] + nums[5] = 3 + (-3) = 0
// 1.Brute force
function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===target){
            return [i,j]
        }           
        }
    }
    
}
let arr = [1, 3, 5, -7, 6, -3]
let target = 0
console.log(twoSum(arr,target))
// TC:O(n^2)

// 2.Better appraoch
function twoSum(nums, target) {
    const seen = new Map(); // number -> index
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (seen.has(complement)) {
        return [seen.get(complement), i];
      }
      seen.set(nums[i], i);
    }
    return null;
  }
  let arr2 = [1, 6, 2, 10, 3]
  let target2 = 7
  console.log(twoSum(arr2,target2))