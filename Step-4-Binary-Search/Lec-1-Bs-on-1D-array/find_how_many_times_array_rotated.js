// Input : nums = [4, 5, 6, 7, 0, 1, 2, 3]

// Output: 4

// Explanation: The original array should be [0, 1, 2, 3, 4, 5, 6, 7]. So, we can notice that the array has been rotated 4 times.

// Input: nums = [3, 4, 5, 1, 2]

// Output: 3

// Explanation: The original array should be [1, 2, 3, 4, 5]. So, we can notice that the array has been rotated 3 times.
function countRotations(arr){
    let low=0;
    let high=arr.length-1;
    let ans=Infinity
    let index=-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(arr[low]<=arr[mid]){
           if(arr[low]<ans){
            ans=arr[low]
            index=low;
           }
           low=mid+1;
        }
        else{
            if(arr[mid]<ans){
                ans=arr[mid]
                index=mid;
            }
            high=mid-1;
        }
    }
    return index
}
let arr=[4,5,6,7,0,1,2]
console.log(countRotations(arr))
//TC:O(logn)
