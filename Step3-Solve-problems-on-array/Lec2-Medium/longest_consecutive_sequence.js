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