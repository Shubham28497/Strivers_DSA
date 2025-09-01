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
