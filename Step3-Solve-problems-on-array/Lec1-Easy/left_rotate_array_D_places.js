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

    // 2.Temporary array approach
    function leftRotateTempArray(arr,d){
        let n=arr.length;
         d = d%n; //In case d>n
        let temp=arr.slice(0,d)//copy first d elements
        for(let i=d;i<n;i++){
            arr[i-d]=arr[i] // Shift remaining elements left
        }
        for(let i=0;i<temp.length;i++){
            arr[n-d+i]=temp[i]
        }
        return arr
        
    }
    let arr2 = [1, 2, 3, 4, 5]
    let D1 = 2 
    console.log(leftRotateTempArray(arr2,D1))