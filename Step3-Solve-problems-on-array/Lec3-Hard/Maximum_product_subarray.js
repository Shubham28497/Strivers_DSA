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
//TC: O(n^2)

//2.better approach
function maxProduct(nums) {
  let maxProduct = -Infinity;
  let prefix = 1, suffix = 1;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    prefix = prefix === 0 ? nums[i] : prefix * nums[i];
    suffix = suffix === 0 ? nums[n - 1 - i] : suffix * nums[n - 1 - i];

    maxProduct = Math.max(maxProduct, prefix, suffix);

    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;
  }

  return maxProduct;
}
let nums=[1,2,3,4,5,0]
console.log(maxProductSubarray(nums))
