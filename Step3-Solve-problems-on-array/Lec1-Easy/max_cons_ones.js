// Examples:
// Input: nums = [1, 1, 0, 0, 1, 1, 1, 0]
// Output: 3
// Explanation: The maximum consecutive 1s are present from index 4 to index 6, amounting to 3 1s
// Input: nums = [0, 0, 0, 0, 0, 0, 0, 0]
// Output: 0
// Explanation: No 1s are present in nums, thus we return 0
function findMaxConsecutiveOnes(arr){
    let cur=0;
    let maxCount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            cur++;
        if(cur>maxCount){
            maxCount=cur;
        }
        }
        else{
            cur=0;
        }
    }
    return maxCount;
  }
  let arr = [1, 1, 0, 1, 1, 1]
  console.log(findMaxConsecutiveOnes(arr))
  