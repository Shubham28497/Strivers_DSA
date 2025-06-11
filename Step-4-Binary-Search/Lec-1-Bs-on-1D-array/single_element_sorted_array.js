// Input :nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]

// Output:4

// Explanation: Only the number 4 appears once in the array.

// Input : nums = [1, 1, 3, 5, 5]

// Output:3

// Explanation: Only the number 3 appears once in the array.    

function singleNonDuplicate(arr){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(low==high){
            return arr[low]
        }
        if(mid%2==1){
            mid--
        }
        if(arr[mid]===arr[mid+1]){
            low=mid+2
        }
        else{
            high=mid
        }
    }
    return -1;
}
let arr = [1, 1, 2, 3, 3, 4, 4];
console.log((singleNonDuplicate(arr)))