// Examples:
// Input: nums = [-1,0,3,5,9,12], target = 9

// Output: 4

// Explanation: The target integer 9 exists in nums and its index is 4

// Input: nums = [-1,0,3,5,9,12], target = 2

// Output: -1

// Explanation: The target integer 2 does not exist in nums so return -1
// 1.Brute force
function binarySearch(arr,target){
   for(let i=0;i<arr.length;i++){
       if(arr[i]==target){
           return i
       }
   }
   return -1;
}
let arr=[-1,0,3,5,9,12]
let target= 9
console.log(binarySearch(arr,target))


