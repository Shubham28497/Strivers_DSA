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

//Using one index
function arrayRev(arr2,i=0){
    let n=arr2.length
    if(i>=Math.floor(n/2)) return;
    [arr2[i],arr2[n-1-i]]=[arr2[n-i-1],arr2[i]]
    arrayRev(arr2,i+1)
    }
    const arr2=[1,2,3,4,5]
    arrayRev(arr2)
    console.log(arr2)