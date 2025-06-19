// Input: nums = [3, 5, 4, 1, 1]
// Output: [1, 2]
// Explanation: 1 appears two times in the array and 2 is missing from nums
// Input: nums = [1, 2, 3, 6, 7, 5, 7]
// Output: [7, 4]
// Explanation: 7 appears two times in the array and 4 is missing from nums.

function findMissingAndRepeating(arr){
let n=arr.length;
let S= (n*(n+1))/2;
let S2= (n*(n+1)*(2*n+1))/6
let sum=0; let sqSum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
    sqSum+=arr[i]*arr[i]
}
let diff=S-sum; //X-Y
let sqDiff=S2-sqSum
let sumXY=sqDiff/diff //X+Y
let missing =(diff+sumXY)/2
let repeating=missing-diff
return [missing,repeating]
}

let arr = [4, 3, 6, 2, 1, 1];
console.log(findMissingAndRepeating(arr));

//TC:O(n)