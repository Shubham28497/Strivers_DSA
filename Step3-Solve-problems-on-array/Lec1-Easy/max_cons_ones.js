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
  //TC:O(n)
  //SC:O(1)
//   cur = 0

// maxCur = 0

// i = 0, arr[0] = 1:
// It's 1, so:

// cur = 1

// maxCur becomes 1 (since cur > maxCur)

// ✅ Current max streak: 1

// i = 1, arr[1] = 1:
// It's 1, so:

// cur = 2

// maxCur becomes 2 (since cur > maxCur)

// ✅ Current max streak: 2

// i = 2, arr[2] = 0:
// It's 0, so:

// cur = 0 (streak broken)

// ✅ Max streak stays 2

// i = 3, arr[3] = 1:
// It's 1, so:

// cur = 1

// maxCur stays 2

// ✅ Current max streak: 2

// i = 4, arr[4] = 1:
// It's 1, so:

// cur = 2

// maxCur stays 2

// ✅ Current max streak: 2

// i = 5, arr[5] = 1:
// It's 1, so:

// cur = 3

// maxCur becomes 3

// ✅ New max streak: 3