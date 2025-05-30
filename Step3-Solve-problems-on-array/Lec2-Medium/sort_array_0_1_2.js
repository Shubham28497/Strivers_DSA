// Examples:
// Input: nums = [1, 0, 2, 1, 0]
// Output: [0, 0, 1, 1, 2]
// Explanation: The nums array in sorted order has 2 zeroes, 2 ones and 1 two
// Input: nums = [0, 0, 1, 1, 1]
// Output: [0, 0, 1, 1, 1]
// Explanation: The nums array in sorted order has 2 zeroes, 3 ones and zero twos
// 1.Brute force approach
function Sort012(arr){
    let c0=0;
    let c1=0;
    let c2=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0) {
            c0++
        }
        else if(arr[i]===1){
            c1++
        }
        else if(arr[i]===2){
            c2++
        }
    }
    let index=0;
    for(let i=0;i<c0;i++){
        arr[index++]=0
    }
    for(let i=0;i<c1;i++){
        arr[index++]=1
    }
    for(let i=0;i<c2;i++){
        arr[index++]=2
    }
}
let arr = [1, 0, 2, 1, 0]
Sort012(arr)
console.log(arr)
//TC: O(2n)

// 2.Optimal approach: Dutch national flag algorith
function Sort012(arr){
    let low=0;
    let mid=0;
    let high=arr.length-1
    while(mid<=high){
        if(arr[mid]===0){
            [arr[low],arr[mid]]= [arr[mid],arr[low]]
            low++
            mid++
        }
        else if(arr[mid]===1){
            mid++
        }
        else
        {
            [arr[mid],arr[high]]=[arr[high],arr[mid]]
            high--
        }
    }
 }
 let arr2 = [1, 0, 2, 1, 0]
 // let target = 7
 Sort012(arr2)
 console.log(arr2)
 //TC:O(n)