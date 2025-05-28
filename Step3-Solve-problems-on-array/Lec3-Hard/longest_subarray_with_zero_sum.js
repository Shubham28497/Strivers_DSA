// Example 1:
// Input Format: N = 6, array[] = {9, -3, 3, -1, 6, -5}
// Result: 5
// Explanation: The following subarrays sum to zero:
// {-3, 3} , {-1, 6, -5}, {-3, 3, -1, 6, -5}
// Since we require the length of the longest subarray, our answer is 5!

// Example 2:
// Input Format: N = 8, array[] = {6, -2, 2, -8, 1, 7, 4, -10}
// Result: 8
// Subarrays with sum 0 : {-2, 2}, {-8, 1, 7}, {-2, 2, -8, 1, 7}, {6, -2, 2, -8, 1, 7, 4, -10}
// Length of longest subarray = 8
function longestSubArrayWithSumZero(arr){
    let maxLength=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum=sum+arr[j];
            if(sum==0){
                maxLength=Math.max(maxLength,j-i+1)
            }
        }
    }
    return maxLength
}
let arr=[9, -3, 3, -1, 6, -5]
console.log(longestSubArrayWithSumZero(arr))
//TC:O(n^2)

//2. Better approach
function longestSubArrayWithSumZero(arr) {
    let sum = 0;
    let maxLength = 0;
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === 0) {
            maxLength = i + 1;
        }

        if (map.has(sum)) {
            maxLength = Math.max(maxLength, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }

    return maxLength;
}
