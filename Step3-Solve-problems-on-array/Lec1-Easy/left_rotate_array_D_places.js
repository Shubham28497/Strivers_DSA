// Examples:
// Input: nums = [1, 2, 3, 4, 5, 6], k = 2
// Output: nums = [3, 4, 5, 6, 1, 2]
// Explanation: rotate 1 step to the left: [2, 3, 4, 5, 6, 1]
// rotate 2 steps to the left: [3, 4, 5, 6, 1, 2]

// 1.Brute Force Approach
function leftRotateByOne(arr) {
    let temp=arr[0]
    for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i]
    }
    arr[arr.length-1]=temp
    }
    
    function leftRotateBrute(arr, d) {
      for (let i = 0; i < d; i++) {
        leftRotateByOne(arr);
      }
      return arr;
    }
    
    let arr = [1, 2, 3, 4, 5]
    let D = 2 
    console.log(leftRotateBrute(arr,D))
    //TC: O(n*d)
    //SC:O(1)