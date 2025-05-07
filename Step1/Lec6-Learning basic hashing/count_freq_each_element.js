// Example 1:
// Input: arr[] = {10,5,10,15,10,5};
// Output: 10  3
// 	 5  2
//         15  1
// Explanation: 10 occurs 3 times in the array
// 	      5 occurs 2 times in the array
//               15 occurs 1 time in the array
// Example2: 
// Input: arr[] = {2,2,3,4,4,2};
// Output: 2  3
// 	3  1
//         4  2
// Explanation: 2 occurs 3 times in the array
// 	     3 occurs 1 time in the array
//              4 occurs 2 time in the array
//First approach
const frequency=(arr,item)=>{
let count=0;
for(let i=0;i<arr.length;i++){
if(arr[i]===item)
{
    count++
}
}
return count
}
console.log(frequency([1, 2, 3, 2, 1, 2, 3, 1,4],4))
//brute force to count each element frequency
function countFrequencies(arr){
    const visited=[];
    for(let i=0;i<arr.length;i++){
        if(visited.includes(arr[i])) continue;
    
    let count=1;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j])
        count++
    }
 visited.push(arr[i])
 console.log(arr[i],count)
}
    
}
const arr = [10, 5, 10, 15, 10, 5];
countFrequencies(arr);