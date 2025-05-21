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