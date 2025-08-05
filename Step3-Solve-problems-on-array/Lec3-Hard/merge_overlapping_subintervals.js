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