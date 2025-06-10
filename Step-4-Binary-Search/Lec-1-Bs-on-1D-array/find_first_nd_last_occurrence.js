// Input: nums = [5, 7, 7, 8, 8, 10], target = 8

// Output: [3, 4]

// Explanation:The target is 8, and it appears in the array at indices 3 and 4, so the output is [3,4]

// Input: nums = [5, 7, 7, 8, 8, 10], target = 6

// Output: [-1, -1]

// Expalantion: The target is 6, which is not present in the array. Therefore, the output is [-1, -1].
// 1.with linear search
function firstAndLastOccurrence(arr,target){
  let first=-1;
  let last=-1;
  for(let i=0;i<arr.length;i++){
      if(arr[i]==target){
          if(first===-1){
              first=i
          }
          last=i;
  }
}
return [first,last]
}
let arr=[5, 7, 7, 8, 8, 10]
let target= 8
console.log(firstAndLastOccurrence(arr,target))
//Tc:O(N)
//2. with binary approach
function firstOccurrence(arr,target){
  let low=0;
  let high=arr.length-1;
  let first=-1;
  while(low<=high){
      let mid=Math.floor((low+high)/2)
      if(arr[mid]==target){
          first=mid;
          high=mid-1
      }
      else if(arr[mid]<target){
          low=mid+1;
      }
      else{
          high=mid-1
      }
  }
  return first
}
function lastOccurrence(arr,target){
  let low=0;
  let high=arr.length-1;
  let last=-1;
  while(low<=high){
      let mid=Math.floor((low+high)/2)
      if(arr[mid]==target){
          last=mid;
          low=mid+1
      }
      else if(arr[mid]<target){
          low=mid+1;
      }
      else{
          high=mid-1
      }
  }
  return last
}
function find(arr,target){
     let first = firstOccurrence(arr, target);
    let last = lastOccurrence(arr, target);
    return [first, last];
}
let arr2=[1, 3, 5, 5, 5, 5, 67, 123, 125]
let target2= 5
console.log(find(arr2,target2))




