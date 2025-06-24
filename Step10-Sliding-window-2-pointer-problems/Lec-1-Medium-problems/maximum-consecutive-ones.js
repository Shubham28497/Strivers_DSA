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
//TC:O(n)
// | right | arr\[right] | zeroCount | left | Action / Notes                           | Window                | maxOnes          |   |
// | ----- | ----------- | --------- | ---- | ---------------------------------------- | --------------------- | ---------------- | - |
// | 0     | 1           | 0         | 0    | 1 → not a 0, no change                   | \[1]                  | 1                |   |
// | 1     | 1           | 0         | 0    | 1 → not a 0                              | \[1,1]                | 2                |   |
// | 2     | 1           | 0         | 0    | 1 → not a 0                              | \[1,1,1]              | 3                |   |
// | 3     | 0           | 1         | 0    | 0 → zeroCount becomes 1                  | \[1,1,1,0]            | 4                |   |
// | 4     | 0           | 2         | 0    | 0 → zeroCount becomes 2                  | \[1,1,1,0,0]          | 5                |   |
// | 5     | 0           | 3         | 0    | 0 → zeroCount > k (2) → enter while loop |                       |                  |   |
// |       |             | 3 → 3     | 0    | arr\[0] = 1 → skip zeroCount change      | left++ → 1            |                  |   |
// |       |             | 3 → 3     | 1    | arr\[1] = 1 → skip zeroCount change      | left++ → 2            |                  |   |
// |       |             | 3 → 3     | 2    | arr\[2] = 1 → skip zeroCount change      | left++ → 3            |                  |   |
// |       |             | 3 → 2     | 3    | arr\[3] = 0 → zeroCount--                | left++ → 4            | \[0,0,1]         | 5 |
// | 6     | 1           | 2         | 4    | Still valid (zeroCount = 2)              | \[0,0,1] → \[0,0,1,1] | 5                |   |
// | 7     | 1           | 2         | 4    | Still valid                              | \[0,0,1,1,1]          | 5                |   |
// | 8     | 1           | 2         | 4    | Still valid                              | \[0,0,1,1,1,1]        | 6                |   |
// | 9     | 1           | 2         | 4    | Still valid                              | \[0,0,1,1,1,1,1]      | 7                |   |
// | 10    | 0           | 3         | 4    | 0 → zeroCount becomes 3 > k              | enter while loop      |                  |   |
// |       |             | 3 → 2     | 4    | arr\[4] = 0 → zeroCount--                | left++ → 5            | \[0,1,1,1,1,1,0] | 7 |
// |       |             | 2         | done | valid window again                       |                       |                  |   |
