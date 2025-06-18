// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

function majorityElement(arr) {
let count1=0; let count2=0;
let el1; let el2;
for(let i=0;i<arr.length;i++){
    if(count1===0 && el1!=arr[i]){
        count1=1;
        el1=arr[i]
    }
    else if(count2===0 && el2!=arr[i]){
        count2=1;
        el2=arr[i]
    }
    else if(arr[i]===el1){
        count1++
    }
    else if(arr[i]===el2){
        count2++
    }
    else{
        count1--
        count2--
    }
}
count1=0;
count2=0;
let result=[]
for(let i=0;i<arr.length;i++){
    if(el1==arr[i]) count1++;
    if(el2==arr[i]) count2++;
}
    if (count1 > Math.floor(arr.length / 3)) result.push(el1);
    if (count2 > Math.floor(arr.length / 3)) result.push(el2);

    return result;
}
let arr = [1, 2, 1, 1, 3, 2, 2];
console.log(majorityElement(arr));
//TC:O(n)