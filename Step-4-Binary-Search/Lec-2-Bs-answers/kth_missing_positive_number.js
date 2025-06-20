// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Example 2:

// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6
function findKthMissingPositive(arr,k){
let n=arr.length;
for(let i=0;i<arr.length;i++){
    if(arr[i]>(k+i)){
        return k+i;
    }
}
return k+n;
}
let arr = [2, 3, 4, 7, 11];
let k = 5;
console.log(findKthMissingPositive(arr, k));
//TC:O(n)
function kthMissing(arr, k) {
    let lo = 0, hi = arr.length - 1;
    let res = arr.length + k;

    // Binary Search for index where arr[i] > (i + k)
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (arr[mid] > mid + k) {
            res = mid + k;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return res;
}

// Driver Code
const arr2 = [2, 3, 4, 7, 11];
const k2 = 5;
console.log(kthMissing(arr2, k2));