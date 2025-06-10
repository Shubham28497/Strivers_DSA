// Example 1:
// Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
// Result: 1
// Explanation: Index 1 is the smallest index such that arr[1] >= x.

// Example 2:
// Input Format: N = 5, arr[] = {3,5,8,15,19}, x = 9
// Result: 3
// Explanation: Index 3 is the smallest index such that arr[3] >= x
function lowerBound(arr,target){
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
let arr=[-1,0,3,5,9,12]
let target= 9
console.log(lowerBound(arr,target))


