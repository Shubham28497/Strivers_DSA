// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false
function searchElementUnique(arr,target){
  let low=0;
  let high=arr.length-1;
  while(low<=high){
      let mid=Math.floor((low+high)/2)
      if(arr[mid]==target){
          return true;
      }
      if(arr[low]==arr[mid]&&arr[mid]==arr[high]){
          low++;
          high--
      }
      else if(arr[low]<=arr[mid]){
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
  return false;
}
let arr=[2, 5, 6, 0, 0, 1, 2]
let target= 0
console.log(searchElementUnique(arr,target))


