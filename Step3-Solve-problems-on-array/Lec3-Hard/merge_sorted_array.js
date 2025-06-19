// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

function mergeSortedArrays(arr1,arr2){
   return[...arr1,...arr2].sort((a,b)=>a-b)
}
let arr1=[ 1, 3, 5, 7]
let arr2=[2, 4, 6, 8]
console.log(mergeSortedArrays(arr1,arr2))
//TC:O((n + m) log(n + m))

function mergeInPlace(arr1,m,arr2,n){
let i=m-1;
let j=n-1;
let k=m+n-1;
while(j>=0){
    if(i>=0 && arr1[i]> arr2[j]){
        arr1[k--] = arr1[i--]
    } else{
        arr1[k--] = arr2[j--]
    }
}
}
arr1 = [1,2,3,0,0,0], m = 3, arr2 = [2,5,6], n = 3
mergeInPlace(arr1,m,arr2,n)
console.log(arr1)