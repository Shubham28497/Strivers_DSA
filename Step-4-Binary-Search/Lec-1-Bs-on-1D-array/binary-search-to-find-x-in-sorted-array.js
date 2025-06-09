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

// 2.Binary search
function binarySearch(arr,target){
  let low=0;
  let high=arr.length-1;
  while(low<=high){
      let mid=Math.floor((low+high)/2)
      if(arr[mid]==target){
          return mid;
      }
      else if(arr[mid]<target){
          low=mid+1;
      }
      else{
          high=mid-1
      }
  }
  return -1;
}
let arr2=[-1,0,3,5,9,12]
let target2= 9
console.log(binarySearch(arr2,target2))


