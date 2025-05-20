// Examples:
// Input: nums = [1, 2, 3, 4, 5]
// Output: [2, 3, 4, 5, 1]
// Explanation: Initially, nums = [1, 2, 3, 4, 5]
// Rotating once to left -> nums = [2, 3, 4, 5, 1]
// Input: nums = [-1, 0, 3, 6]
// Output: [0, 3, 6, -1]
// Explanation: Initially, nums = [-1, 0, 3, 6]
// Rotating once to left -> nums = [0, 3, 6, -1]
function leftRotateByOne(arr){
    let temp=arr[0]
    for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i]
    }
    arr[arr.length-1]=temp
    return arr
}
let arr=[1, 2, 3, 4, 5]
console.log(leftRotateByOne(arr))