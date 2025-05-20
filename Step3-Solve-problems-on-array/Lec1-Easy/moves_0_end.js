// Examples:
// Input: nums = [0, 1, 4, 0, 5, 2]
// Output: [1, 4, 5, 2, 0, 0]
// Explanation: Both the zeroes are moved to the end and the order of the other elements stay the same
// Input: nums = [0, 0, 0, 1, 3, -2]
// Output: [1, 3, -2, 0, 0, 0]
// Explanation: All 3 zeroes are moved to the end and the order of the other elements stay the same
function moveZerosToEnd(arr){
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[j]=arr[i]
            j++
        }
    }
    while(j<arr.length){
        arr[j]=0;
        j++
    }
    return arr
    }
    let arr = [0, 1, 0, 3, 12]
    console.log(moveZerosToEnd(arr))