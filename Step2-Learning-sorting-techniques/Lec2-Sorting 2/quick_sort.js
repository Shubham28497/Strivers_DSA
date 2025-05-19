//1.Pick the pivot and place it in its correct place in the sorted array
//2. Smaller on the left and larger on the right
//pivot el can be 1st last mid and any random element
// Problem Statement:  Given an array of n integers, sort the array using the Quicksort method.
// Examples:
// Example 1:
// Input:  N = 5  , Arr[] = {4,1,7,9,3}
// Output: 1 3 4 7 9 
// Explanation: After sorting the array becomes 1, 3, 4, 7, 9
// Example 2:
// Input: N = 8 , Arr[] = {4,6,2,5,7,9,1,3}
// Output: 1 2 3 4 5 6 7 9
// Explanation: After sorting the array becomes 1, 3, 4, 7, 9

function quickSort(arr){
    if (arr.length <= 1) return arr;
let pivot=arr[0];
let left=[]
let right=[]
for(let i=1;i<arr.length;i++){
   if(arr[i]<pivot){
       left.push(arr[i])
   }
   else{
       right.push(arr[i])
   }
}
return [...quickSort(left), pivot, ...quickSort(right)];
}
let arr=[8,7,6,3,4,5,2,1]
console.log(quickSort(arr))
// Time Complexity - O(nlog n)
// Space Complexity - O(n)