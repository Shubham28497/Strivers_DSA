// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
function peakElement(arr){
    let n=arr.length;
    if(n===1){
        return 0;
    }
    if(arr[0]>arr[1]){
        return 0;
    }
    if(arr[n-1]>arr[n-2]){
        return n-1;
    }
    let low=1; 
    let high=n-2;
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(arr[mid]>arr[mid-1] && arr[mid]> arr[mid+1]){
            return mid;
        }
         if (arr[mid] < arr[mid + 1]){
              low = mid + 1;
         }
           
        else{
            high = mid - 1; 
        }
           
    }
    return 0;
    }
const arr = [ 1, 2, 4, 5, 7, 8, 3 ];
console.log(peakElement(arr));