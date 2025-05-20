// Input: nums = [0, 2, 3, 1, 4]
// Output: 5
// Explanation: nums contains 0, 1, 2, 3, 4 thus leaving 5 as the only missing number in the range [0, 5]
// Input: nums = [0, 1, 2, 4, 5, 6]
// Output: 3
// Explanation: nums contains 0, 1, 2, 4, 5, 6 thus leaving 3 as the only missing number in the range [0, 6]
function findMissingNumber(arr){
    let n=arr.length+1
    let expectedsum=(n*(n+1)/2)
    let actualSum=0;
  for(let i=0;i<arr.length;i++){
      actualSum=actualSum+arr[i]
  }
  return expectedsum - actualSum
 }
 
 
 let arr = [1,2,3,4,5,7]
 console.log(findMissingNumber(arr))