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
