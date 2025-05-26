// Examples:
// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest sequence of consecutive elements in the array is [1, 2, 3, 4], 
// which has a length of 4. This sequence can be formed regardless of the initial order
//  of the elements in the array.
// Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// Output: 9
// Explanation: The longest sequence of consecutive elements in
//  the array is [0, 1, 2, 3, 4, 5, 6, 7, 8], which has a length of 9. 

//1. Brute force appraoch
function longestConsecutiveSequence(arr,k){
    let maxLength=0;
    for(let i=0;i<arr.length;i++){
        let curNum=arr[i];
        let count=1;
        while(arr.includes(curNum+1)){
            curNum++;
            count++
            
        }
        maxLength=Math.max(maxLength,count)
    }
    return maxLength
}
let arr=[100, 4, 200, 1, 3, 2]
console.log(longestConsecutiveSequence(arr))
//TC: O(n^2)

//EX: i = 0, nums[0] = 100
// Start with currNum = 100, count = 1

// Is 101 in nums? ❌ No → End sequence.

// maxLen = max(0, 1) = 1

// 2️⃣ i = 1, nums[1] = 4
// currNum = 4, count = 1

// Is 5 in nums? ❌ No

// maxLen = max(1, 1) = 1

// 3️⃣ i = 2, nums[2] = 200
// currNum = 200, count = 1

// Is 201 in nums? ❌ No

// maxLen = max(1, 1) = 1

// 4️⃣ i = 3, nums[3] = 1
// currNum = 1, count = 1

// Is 2 in nums? ✅ Yes → currNum = 2, count = 2

// Is 3 in nums? ✅ Yes → currNum = 3, count = 3

// Is 4 in nums? ✅ Yes → currNum = 4, count = 4

// Is 5 in nums? ❌ No

// maxLen = max(1, 4) = 4

// ✅ Longest sequence so far: [1, 2, 3, 4]

// 5️⃣ i = 4, nums[4] = 3
// currNum = 3, count = 1

// Is 4 in nums? ✅ → currNum = 4, count = 2

// Is 5 in nums? ❌

// maxLen = max(4, 2) = 4

// 2.Better appraoch
function longestConsecutiveSort(nums) {
    if (nums.length === 0) return 0;
  
    nums.sort((a, b) => a - b);
  
    let maxLen = 1;
    let currLen = 1;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) continue; // skip duplicates
      if (nums[i] === nums[i - 1] + 1) {
        currLen++;
        maxLen = Math.max(maxLen, currLen);
      } else {
        currLen = 1;
      }
    }
  
    return maxLen;
  }
//TC: O(nlogn)

// 3.Optimal appraoch
function longestConsecutiveSequence(arr,k){
    let maxLength=0;
    let numSet=new Set(arr)
    for(let arr of numSet){
        if(!numSet.has(arr-1)){
            let curNum=arr;
            let count=1;
        while(numSet.has(curNum+1)){
            curNum++;
            count++
        }
        maxLength=Math.max(maxLength,count)
    }
    }
    return maxLength
    
}
let arr=[100, 4, 200, 1, 3, 2]
console.log(longestConsecutiveSequence(arr))

//Tc: O(n)