// Examples:
// Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]
// Output: [1, 2, 3, 4, 5, 7]
// Explanation: The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2
// Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]
// Output: [1, 3, 4, 5, 6, 7, 8, 9]
// Explanation: The element 7 is common to both, 3, 4, 6, 9 are from nums1 and 1, 5, 8 is from nums2


function unionUsingSet(arr1,arr2){
    return [...new Set([...arr1,...arr2])]
}

arr1 = [1, 2, 3, 4];
arr2 = [3, 4, 5, 6];
console.log(unionUsingSet(arr1,arr2))
// Time: O(n + m)