// Input: nums = [10, 5, 2, 7, 1, 9],  k=15
// Output: 4
// Explanation: The longest sub-array with a sum equal to 15 is [5, 2, 7, 1], which has a length of 4. This sub-array starts at index 1 and ends at index 4, and the sum of its elements 
// (5 + 2 + 7 + 1) equals 15. Therefore, the length of this sub-array is 4.
// 1.Brute force approach
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
let arr= [1, 2, 3, -2, 5]
let k=5;
console.log(longestSubarrayWithSumK(arr,k))
// TC:O(n^2)

// 2. Two pointer approach/Sliding window
function longestSubarrayWithSumK_Positive(arr, K) {
    let left = 0, right = 0, sum = 0, maxLength = 0;

    while (right < arr.length) {
        sum += arr[right];

        while (sum > K && left <= right) {
            sum -= arr[left];
            left++;
        }

        if (sum === K) {
            maxLength = Math.max(maxLength, right - left + 1);
        }

        right++;
    }

    return maxLength;
}
let arr2 = [1, 2, 1, 1, 1, 3, 1];
let K = 5;
//TC: O(n)
// | Step | `left` | `right` | `arr[right]` | `sum` | `sum > K`? | `sum === K`? | `maxLength` | Window        |
// | ---- | ------ | ------- | ------------ | ----- | ---------- | ------------ | ----------- | ------------- |
// | 1    | 0      | 0       | 1            | 1     | ❌          | ❌            | 0           | \[1]          |
// | 2    | 0      | 1       | 2            | 3     | ❌          | ❌            | 0           | \[1,2]        |
// | 3    | 0      | 2       | 1            | 4     | ❌          | ❌            | 0           | \[1,2,1]      |
// | 4    | 0      | 3       | 1            | 5     | ❌          | ✅            | 4           | \[1,2,1,1]    |
// | 5    | 0      | 4       | 1            | 6     | ✅          | ❌            | 4           | Shrink left → |
// | →    | 1      | 4       | -            | 5     | ❌          | ✅            | 4           | \[2,1,1,1]    |
// | 6    | 1      | 5       | 3            | 8     | ✅          | ❌            | 4           | Shrink left → |
// | →    | 2      | 5       | -            | 6     | ✅          | ❌            | 4           | Shrink left → |
// | →    | 3      | 5       | -            | 5     | ❌          | ✅            | 4           | \[1,1,3]      |
// | 7    | 3      | 6       | 1            | 6     | ✅          | ❌            | 4           | Shrink left → |
// | →    | 4      | 6       | -            | 5     | ❌          | ✅            | 4           | \[1,3,1]      |
