// Input: nums = [2, 3, 7, 1, 3, 5]
// Output: 5
// Explanation: The responsible indexes are:
// nums[0], nums[3], values: 2 > 1 & indexes: 0 < 3
// nums[1], nums[3], values: 3 > 1 & indexes: 1 < 3
// nums[2], nums[3], values: 7 > 1 & indexes: 2 < 3
// nums[2], nums[4], values: 7 > 3 & indexes: 2 < 4
// nums[2], nums[5], values: 7 > 5 & indexes: 2 < 5
// Input: nums = [-10, -5, 6, 11, 15, 17]
// Output: 0
// Explanation: nums is sorted, hence no inversions present.
function countInversion(arr) {
let count=0;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            count++;
        }
    }
}
return count
}
let arr = [2, 3, 7, 1, 3, 5];
console.log(countInversion(arr));
