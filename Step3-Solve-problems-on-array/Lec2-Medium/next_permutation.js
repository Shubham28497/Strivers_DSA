// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// 1.Brute force
// For brute force there will be  3steps
// --> generate all the permutation
// --> linear search
// --> next index
//so time complexity will be O(n! * n) which will take more time

//2. optimal appraoch
// The standard algorithm (O(n)):
// Find first decreasing element from right (i such that nums[i] < nums[i+1]).
// If none → reverse whole array (last permutation case).
// Otherwise:
// Find the just larger element than nums[i] to the right (j).
// Swap nums[i] and nums[j].
// Reverse the subarray from i+1 to end.

//step 1: Find the first decreasing element from the right
// Traverse from right to left, find the first index i such that nums[i] < nums[i + 1].
// If no such index exists, the array is the largest permutation → just reverse it.

// Step2: Find the next greater element on the right of i
// Traverse from right again, find the first index j such that nums[j] > nums[i].

// Step3: Swap nums[i] and nums[j].

// Step4: Reverse the suffix starting from i + 1
// Because after index i, the sequence is in descending order, reversing makes it ascending (smallest possible).
var nextPermutation = function(nums) {
    let n=nums.length;
    let i=n-2;
    while(i>=0 && nums[i]>=nums[i+1]){
        i--
    }
    if(i>=0){
        let j=n-1;
        while(nums[j]<=nums[i]){
            j--
        }
        [nums[i],nums[j]]=[nums[j],nums[i]];
    }
    reverse(nums,i+1,n-1)
};
function reverse(nums,start,end){
    while(start<end){
        [nums[start],nums[end]]=[nums[end],nums[start]]
        start++
        end--
    }
}
//Add tc 
//O(n)

//Add dry and run steps
// Input
// nums = [7, 2, 3, 1, 5, 4, 3, 2, 0]
// index:  0  1  2  3  4  5  6  7  8
// n = 9

// Step 1 — Find pivot i (first decreasing element from right)

// We start at i = n - 2 = 7:

// Compare nums[7] = 2 with nums[8] = 0 → 2 >= 0, not valid → i = 6.

// Compare nums[6] = 3 with nums[7] = 2 → 3 >= 2, not valid → i = 5.

// Compare nums[5] = 4 with nums[6] = 3 → 4 >= 3, not valid → i = 4.

// Compare nums[4] = 5 with nums[5] = 4 → 5 >= 4, not valid → i = 3.

// Compare nums[3] = 1 with nums[4] = 5 → 1 < 5 ✅ found pivot.

// 👉 So, i = 3, nums[i] = 1.

// The suffix after index 3 is [5, 4, 3, 2, 0], which is descending.

// Step 2 — Find j (rightmost element > nums[i])

// Start from j = n - 1 = 8:

// nums[8] = 0 → 0 <= 1, not valid → j = 7.

// nums[7] = 2 → 2 > 1 ✅ found j.

// 👉 So, j = 7, nums[j] = 2.

// Step 3 — Swap nums[i] and nums[j]

// Swap indices 3 and 7:

// Before swap: [7, 2, 3, 1, 5, 4, 3, 2, 0]
// After swap : [7, 2, 3, 2, 5, 4, 3, 1, 0]

// Step 4 — Reverse suffix from i+1 to end

// We need to reverse nums[4..8] = [5, 4, 3, 1, 0].

// Swap nums[4] and nums[8]: swap 5 and 0 → [7, 2, 3, 2, 0, 4, 3, 1, 5]

// Swap nums[5] and nums[7]: swap 4 and 1 → [7, 2, 3, 2, 0, 1, 3, 4, 5]

// nums[6] stays as 3 (middle).

// 👉 Final array:

// [7, 2, 3, 2, 0, 1, 3, 4, 5]