// Input : nums = [4, 5, 6, 7, 0, 1, 2, 3]

// Output: 0

// Explanation: Here, the element 0 is the minimum element in the array.

// Input : nums = [3, 4, 5, 1, 2]

// Output: 1

// Explanation:Here, the element 1 is the minimum element in the array.
function minSorted(arr){
    let low=0;
    let high=arr.length-1;
    let ans=Infinity
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(arr[low]<=arr[mid]){
            ans=Math.min(ans,arr[low])
            low=mid+1;
        }
        else{
            ans=Math.min(ans,arr[mid])
            high=mid-1;
        }
    }
    return ans
}
let arr=[4,5,6,7,0,1,2]
console.log(minSorted(arr))
//TC:O(logn)

