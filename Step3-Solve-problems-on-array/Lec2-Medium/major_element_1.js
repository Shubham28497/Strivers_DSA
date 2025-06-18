// Examples:
// Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]
// Output: 7
// Explanation: The number 7 appears 5 times in the 9 sized array
// Input: nums = [1, 1, 1, 2, 1, 2]
// Output: 1
// Explanation: The number 1 appears 4 times in the 6 sized array
// 1.Brute force
function majorityElement(arr){
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
            count++    
            }
        }
         if(count>Math.floor(arr.length/2)){
        return arr[i]
    }
    }
 }
 let arr = [7, 0, 0, 1, 7, 7, 2, 7, 7]
 console.log(majorityElement(arr))
 //TC: O(n^2)
//  2.Optimal approach : Boyer-Moore voting algo
function majorityElement(arr){
    let count=0;
    let el;
    for(let i=0;i<arr.length;i++){
        if(count===0){
            count=1;
            el=arr[i]
        }
        else if(arr[i]===el){
            count++
        }
        else{
            count--
        }
    }
    return el
  }
  let arr2 = [7, 0, 0, 1, 7, 7, 2, 7, 7]
  console.log(majorityElement(arr2))
  //TC:O(n)
  