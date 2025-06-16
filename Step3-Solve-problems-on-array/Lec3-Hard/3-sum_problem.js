// Input: nums = [2, -2, 0, 3, -3, 5]

// Output: [[-2, 0, 2], [-3, -2, 5], [-3, 0, 3]]

// Explanation: nums[1] + nums[2] + nums[0] = 0

// nums[4] + nums[1] + nums[5] = 0

// nums[4] + nums[2] + nums[3] = 0

// Input: nums = [2, -1, -1, 3, -1]

// Output: [[-1, -1, 2]]

// Explanation: nums[1] + nums[2] + nums[0] = 0

// Note that we have used two -1s as they are separate elements with different indexes

// But we have not used the -1 at index 4 as that would create a duplicate triplet