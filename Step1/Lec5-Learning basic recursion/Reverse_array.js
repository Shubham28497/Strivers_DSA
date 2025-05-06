// Input: n=5, arr = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Explanation: The reverse of the array [1,2,3,4,5] is [5,4,3,2,1]
function revArray(arr,start=0,end=arr.length-1){
    if(start>=end) return;{
        [arr[start],arr[end]]=[arr[end],arr[start]]
        revArray(arr,start+1,end-1)
    }
}
let arr = [1, 2, 3, 4, 5];
revArray(arr);
console.log(arr)