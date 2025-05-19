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

// TC:O(n^2)

//with map 
function countFrequencies(arr){
    let freqMap=new Map();
    arr.forEach((num)=>{
        freqMap.set(num,(freqMap.get(num)||0)+1)
    })
//     | Iteration | num | get(num)  | (get(num) \|\| 0) + 1 | Action     | freqMap state           |
// | --------- | --- | --------- | --------------------- | ---------- | ----------------------- |
// | 1         | 10  | undefined | 0 + 1 = 1             | set(10, 1) | {10 → 1}                |
// | 2         | 5   | undefined | 0 + 1 = 1             | set(5, 1)  | {10 → 1, 5 → 1}         |
// | 3         | 10  | 1         | 1 + 1 = 2             | set(10, 2) | {10 → 2, 5 → 1}         |
// | 4         | 15  | undefined | 0 + 1 = 1             | set(15, 1) | {10 → 2, 5 → 1, 15 → 1} |
// | 5         | 10  | 2         | 2 + 1 = 3             | set(10, 3) | {10 → 3, 5 → 1, 15 → 1} |
// | 6         | 5   | 1         | 1 + 1 = 2             | set(5, 2)  | {10 → 3, 5 → 2, 15 → 1} |

    freqMap.forEach((value,key)=>{
        console.log(key,value)
    })
   }
   countFrequencies([10, 5, 10, 15, 10, 5]);
   TC:O(n)