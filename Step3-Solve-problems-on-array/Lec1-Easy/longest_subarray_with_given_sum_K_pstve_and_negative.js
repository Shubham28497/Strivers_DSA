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
// TC:O(n^2)

function longestSubarrayWithSumK(arr, K) {
    let prefixSum = 0;
    let maxLength = 0;
    let map = new Map(); // key = prefixSum, value = index

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        // Case 1: entire array till i sums to K
        if (prefixSum === K) {
            maxLength = i + 1;
        }

        // Case 2: check if there's a prefixSum that makes the subarray sum to K
        if (map.has(prefixSum - K)) {
            const prevIndex = map.get(prefixSum - K);
            maxLength = Math.max(maxLength, i - prevIndex);
        }

        // Case 3: store only the first occurrence of each prefixSum
        if (!map.has(prefixSum)) {
            map.set(prefixSum, i);
        }
    }

    return maxLength;
}
