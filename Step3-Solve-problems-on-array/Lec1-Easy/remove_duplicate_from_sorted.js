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
//    TC:O(n)
//SC:O(1)