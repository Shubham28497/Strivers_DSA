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
    //Step by step execution of loop1st
    // i = 0 → arr[0] = 0
    // arr[0] is 0 → skip
    
    // j = 0
    
    // ➤ i = 1 → arr[1] = 1
    // arr[1] is not 0 → copy arr[1] to arr[0]
    
    // arr becomes: [1, 1, 0, 3, 12]
    
    // j = 1
    
    // ➤ i = 2 → arr[2] = 0
    // arr[2] is 0 → skip
    
    // j = 1
    
    // ➤ i = 3 → arr[3] = 3
    // arr[3] is not 0 → copy arr[3] to arr[1]
    
    // arr becomes: [1, 3, 0, 3, 12]
    
    // j = 2
    
    // ➤ i = 4 → arr[4] = 12
    // arr[4] is not 0 → copy arr[4] to arr[2]
    
    // arr becomes: [1, 3, 12, 3, 12]
    
    // j = 3
    while(j<arr.length){
        arr[j]=0;
        j++
    }
    return arr
    }
    let arr = [0, 1, 0, 3, 12]
    console.log(moveZerosToEnd(arr))