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


