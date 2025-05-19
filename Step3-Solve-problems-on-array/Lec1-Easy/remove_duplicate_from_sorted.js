// Input: nums = [0, 0, 3, 3, 5, 6]
// Output: 4
// Explanation: Resulting array = [0, 3, 5, 6, _, _]
// There are 4 distinct elements in nums and the elements marked as _ can have any value.
function removeDuplicates(arr) {
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            arr[i+1]=arr[j]
            i++;
        }
    }
    return i+1
   }
   const arr = [1,1,2,2,2,3,3];
   console.log(removeDuplicates(arr))
//    | Step | `i` | `j` | `arr[i]` | `arr[j]` | Action               | Array State      |
// | ---- | --- | --- | -------- | -------- | -------------------- | ---------------- |
// | Init | 0   | 1   | 1        | 1        | same → do nothing    | \[1,1,2,2,2,3,3] |
// | 1    | 0   | 2   | 1        | 2        | new → arr\[1]=2, i++ | \[1,2,2,2,2,3,3] |
// | 2    | 1   | 3   | 2        | 2        | same → do nothing    | \[1,2,2,2,2,3,3] |
// | 3    | 1   | 4   | 2        | 2        | same → do nothing    | \[1,2,2,2,2,3,3] |
// | 4    | 1   | 5   | 2        | 3        | new → arr\[2]=3, i++ | \[1,2,3,2,2,3,3] |
// | 5    | 2   | 6   | 3        | 3        | same → do nothing    | \[1,2,3,2,2,3,3] |

//    TC:O(n)
//SC:O(1)
// console.log(arr.slice(0, removeDuplicates(arr))); // [1, 2, 3]