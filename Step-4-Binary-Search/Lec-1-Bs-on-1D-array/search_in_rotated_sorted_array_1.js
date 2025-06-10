// Examples:
// Input : nums = [4, 5, 6, 7, 0, 1, 2], k = 0

// Output: 4

// Explanation: Here, the target is 0. We can see that 0 is present in the given rotated sorted array, nums. Thus, we get output as 4, which is the index at which 0 is present in the array.

// Input: nums = [4, 5, 6, 7, 0, 1, 2], k = 3

// Output: -1

// Explanation: Here, the target is 3. Since 3 is not present in the given rotated sorted array. Thus, we get the output as -1.
function searchElementUnique(arr,target){
  let low=0;
  let high=arr.length-1;
  while(low<=high){
      let mid=Math.floor((low+high)/2)
      if(arr[mid]==target){
          return mid;
      }
      if(arr[low]<=arr[mid]){
          if(arr[low]<=target && target<=arr[mid]){
              high=mid-1;
          }
          else{
              low=mid+1;
          }
      }
      else{
          if(arr[mid]<=target && target<=arr[high]){
              low=mid+1;
          }
          else{
              high=mid-1;
          }
      }
  }
  return -1;
}
let arr=[4, 5, 6, 7, 0, 1, 2]
let target= 0
console.log(searchElementUnique(arr,target))
//TC:O(logn)


