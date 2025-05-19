// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.
// Examples:
// Input: nums = [8, 8, 7, 6, 5]
// Output: 7
// Explanation: The largest value in nums is 8, the second largest is 7
// Input: nums = [10, 10, 10, 10, 10]
// Output: -1
// Explanation: The only value in nums is 10, so there is no second largest value, thus -1 is returned

function secondLargest(arr){
    let max=-Infinity;
    let second=-Infinity;
    for(let i=0;i<arr.length;i++){
        let num=arr[i]
        if(num>max){
            second=max;
            max=num;
        }
        else if(num<max && num>second){
            second=num;
        }
    }
    return second === -Infinity?-1:second

}
let arr =[10, 5, 8, 20];
console.log(secondLargest(arr))