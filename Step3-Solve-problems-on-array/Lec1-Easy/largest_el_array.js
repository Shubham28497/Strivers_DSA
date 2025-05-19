// Input: nums = [3, 3, 6, 1]
// Output: 6
// Explanation: The largest element in array is 6
// Input: nums = [3, 3, 0, 99, -40]
// Output: 99
// Explanation: The largest element in array is 99
//1.brute force
function largestElement(arr){
    let max=arr[0]
for(let i=1;i<arr.length;i++){
if(arr[i]>max){
max=arr[i]
}
}
return max
}
let arr=[3, 3, 0, 99, -40]
console.log(largestElement(arr))
// 🔹 Time Complexity: O(n)
// 🔹 Space Complexity: O(1) (constant space)