// Example 1:
// Input Format: arr[] = {1,2,4,7}, x = 6
// Result: 3
// Explanation: 6 is not present in the array. So, if we will insert 6 in the 3rd index(0-based indexing), the array will still be sorted. {1,2,4,6,7}.

// Example 2:
// Input Format: arr[] = {1,2,4,7}, x = 2
// Result: 1
// Explanation: 2 is present in the array and so we will return its index i.e. 1.
function searchInsert(arr,target){
  let low=0;
  let high=arr.length-1;
  let res=arr.length;
  while(low<=high){
      let mid=Math.floor((low+high)/2)
      if(arr[mid]>=target){
          res=mid;
          high=mid-1;
      }
      else{
          low=mid+1
      }
  }
  return res;
}
let arr=[1,2,4,7]
let target= 6
console.log(searchInsert(arr,target))

//TC:O(logn)
