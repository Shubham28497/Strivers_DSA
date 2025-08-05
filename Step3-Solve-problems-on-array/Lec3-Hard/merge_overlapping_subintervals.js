// Example 1:
// Example 1: 

// Input: intervals=[[1,3],[2,6],[8,10],[15,18]]

// Output: [[1,6],[8,10],[15,18]]

// Explanation: Since intervals [1,3] and [2,6] are overlapping we can merge them to form [1,6]
//  intervals.

// Example 2:

// Input: [[1,4],[4,5]]

// Output: [[1,5]]

// Explanation: Since intervals [1,4] and [4,5] are overlapping we can merge them to form [1,5].

//1. Brute force approach
function mergeOverlap(arr) {
    let n = arr.length;

    arr.sort((a, b) => a[0] - b[0]);
    let res = [];

    // Checking for all possible overlaps
    for (let i = 0; i < n; i++) {
        let start = arr[i][0];
        let end = arr[i][1];

        // Skipping already merged intervals
        if (res.length > 0 && res[res.length - 1][1] >= end) {
            continue;
        }

        // Find the end of the merged range
        for (let j = i + 1; j < n; j++) {
            if (arr[j][0] <= end) {
                end = Math.max(end, arr[j][1]);
            }
        }
        res.push([start, end]);
    }
    return res;
}

const arr = [[7, 8], [1, 5], [2, 4], [4, 6]];
const res = mergeOverlap(arr);

for (const interval of res)
    console.log(interval[0], interval[1]);
//TC:O(n^2)

//2. Optimised appraoch
function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;
    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [intervals[0]] // Initialize with the first interval
    for (let i = 1; i < intervals.length; i++) {
        const last = res[res.length - 1] // Last merged interval
        const current = intervals[i]
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1])
        }
        else {
            res.push(current)
        }
    }
    return res;
}
const input = [[1, 3], [2, 6], [8, 10], [15, 18]];
const output = mergeIntervals(input);
console.log(output); // [[1,6], [8,10], [15,18]]
//Tc:O(nlogn)
//SC:O(n)

//  Step 1: Input

// intervals = [[1,3], [2,6], [8,10], [15,18]]
// 🔃 Step 2: Sorting
// Sort intervals by start time (a[0] - b[0]):


// intervals = [[1,3], [2,6], [8,10], [15,18]]
// (Note: already sorted in this case.)

// 📌 Step 3: Initialize result array

// res = [ [1,3] ]
// 🔁 Step 4: Loop starts at i = 1
// 🧩 Iteration 1 (i = 1)
// current = [2,6]

// last = [1,3]

// Check overlap:

// current[0] = 2
// last[1] = 3
// ✅ 2 <= 3 → Overlap exists

// Merge:

// last[1] = max(3, 6) = 6
// res = [[1, 6]]
// ✅ Updated last interval in-place.

// 🧩 Iteration 2 (i = 2)
// current = [8,10]

// last = [1,6]

// Check overlap:

// 8 <= 6 ❌ No overlap
// Push current to result:

// res = [[1,6], [8,10]]
// 🧩 Iteration 3 (i = 3)
// current = [15,18]

// last = [8,10]

// Check overlap:


// 15 <= 10 ❌ No overlap
// Push current to result:

// res = [[1,6], [8,10], [15,18]]
// ✅ Final Output

// [[1,6], [8,10], [15,18]]
// Returned by the function.

// 🔚 Summary
// Step	Last Interval	Current Interval	Overlap?	Action	Result So Far
// 0	—	[1,3]	—	Initialize	[[1,3]]
// 1	[1,3]	[2,6]	✅ Yes	Merge → [1,6]	[[1,6]]
// 2	[1,6]	[8,10]	❌ No	Push	[[1,6], [8,10]]
// 3	[8,10]	[15,18]	❌ No	Push	[[1,6], [8,10], [15,18]]