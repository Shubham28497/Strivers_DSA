// Example 1:
// Input:
//  Nums = [1,2,3,4,5,0]
// Output:
//  120
// Explanation:
//  In the given array, we can see 1×2×3×4×5 gives maximum product value.
// Example 2:
// Input:
//  Nums = [1,2,-3,0,-4,-5]
// Output:
//  20
// Explanation:
//  In the given array, we can see (-4)×(-5) gives maximum product value.
function maxProductSubarray(arr){
    let maxProduct=-Infinity
    for(let i=0;i<arr.length;i++){
        let prod=1;
        for(let j=i;j<arr.length;j++){
            prod=prod*arr[j];
            maxProduct=Math.max(maxProduct,prod)
        }
    }
    return maxProduct
}
let arr=[1,2,3,4,5,0]
console.log(maxProductSubarray(arr))