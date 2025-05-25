// Examples:
// Input: nums = [1, 1, 1], k = 2

// Output: 2

// Explanation: In the given array [1, 1, 1], there are two subarrays that sum up to 2:
//  [1, 1] and [1, 1]. Hence, the output is 2.

// Input: nums = [1, 2, 3], k = 3

// Output: 2

// Explanation: In the given array [1, 2, 3], there are two subarrays that 
// sum up to 3: [1, 2] and [3]. Hence, the output is 2.
function countSubArray(arr,k){
    let count=0;
   for(let i=0;i<arr.length;i++){
       let sum=0;
       for(let j=i;j<arr.length;j++){
           sum=sum+arr[j]
           if(sum===k){
               count++
           }
       }
   }
   return count
}
let arr=[1, 1, 1]
let k=2;
console.log(countSubArray(arr,k))