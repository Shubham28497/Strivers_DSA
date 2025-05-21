// Examples:
// Input : nums = [1, 2, 2, 4, 3, 1, 4]

// Output : 3

// Explanation : The integer 3 has appeared only once.
function appearOnce(arr){
 for(let i=0;i<arr.length;i++){
     let num=arr[i];
     let count=0;
    for(let j=0;j<arr.length;j++){
        if(arr[j]==num){
            count++
        }
    }
    if(count===1) return num
 }
}
let arr= [1, 2, 2, 4, 3, 1, 4,3,5]
console.log(appearOnce(arr))
// TC:O(n^2)

// 2.With XoR
// XOR compares two binary digits:

// If the bits are the same → result is 0

// If the bits are different → result is 1
// Step 1: result = 0 ^ 4
// Binary:
// 0   = 0000
// 4   = 0100
// -----------
// XOR = 0100 → 4
// 🟢 result =4
// Step 2: result = 4 ^ 1
// Binary:
// 4 = 0100
// 1 = 0001
// ----------
//     0101 = 5
// 🟢 result = 5
function findSingleNumber(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result ^= arr[i]; // XOR each element at index i
    }
    return result;
}
let arr2 = [4, 1, 2, 1, 2];
console.log(findSingleNumber(arr2)); // Output: 4
//TC:O(n)
