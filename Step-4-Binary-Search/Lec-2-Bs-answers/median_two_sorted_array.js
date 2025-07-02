// Input: a[] = [-5, 3, 6, 12, 15], b[] = [-12, -10, -6, -3, 4, 10]
// Output: 3
// Explanation: The merged array is [-12, -10, -6, -5 , -3, 3, 4, 6, 10, 12, 15]. So the median of the merged array is 3.

// Input: a[] = [1, 12, 15, 26, 38], b[] = [2, 13, 17, 30, 45, 60]
// Output: The median is 17.
// Explanation : The merged array is [1, 2, 12, 13, 15, 17, 26, 30, 38, 45, 60]. So the median of the merged array is 17.
function findMedianSortedArrays(arr1,arr2) {
let merge=[]
let i=0;
let j=0;
while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        merge.push(arr1[i++])
    }
    else{
        merge.push(arr2[j++])
    }
}
 while(i<arr1.length) merge.push(arr1[i++])
 while(j<arr2.length) merge.push(arr2[j++])
 let n=merge.length
 if(n%2===0){
     return (merge[n/2]+merge[n/2-1])/2
 }else{
     return merge[Math.floor(n/2)]
 }
}
let arr1 = [-5, 3, 6, 12, 15];
let arr2 = [-12, -10, -6, -3, 4, 10];
console.log(findMedianSortedArrays(arr1,arr2));
//TC:O(n+m)

//2. optimal approach
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  function mergeSort(start,end){
    if(start>=end) return 0;
    let mid=Math.floor((start+end)/2);
    let count=mergeSort(start,mid)+mergeSort(mid+1,end)
    let j=mid+1;
    for(let i=start;i<=mid;i++){
        while(j<=end && nums[i]>2*nums[j]){
            j++;
        }
        count+=j-(mid+1)
    }
    let temp=[];
   let left=start;
   let right=mid+1;
   while(left<=mid && right<=end){
    if(nums[left]<=nums[right]){
        temp.push(nums[left++])
    }else{
        temp.push(nums[right++])
    }
   }
   while(left<=mid) temp.push(nums[left++])
   while(right<=end) temp.push(nums[right++])
   for(let i=start;i<=end;i++){
    nums[i]=temp[i-start]
   }
   return count;
  }
  return mergeSort(0,nums.length-1)
};