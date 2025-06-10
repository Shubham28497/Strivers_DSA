// Examples

// Example 1:
// Input: N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
// Output: 4
// Explanation: 3 is occurring 4 times in 
// the given array so it is our answer.

// Example 2:
// Input: N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
// Output: 5
// Explanation: 2 is occurring 5 times in the given array so it is our answer
function firstOccurrence(arr, target) {
  let low = 0, high = arr.length - 1, first = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      first = mid;
      high = mid - 1; // Search left
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return first;
}

function lastOccurrence(arr, target) {
  let low = 0, high = arr.length - 1, last = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      last = mid;
      low = mid + 1; // Search right
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return last;
}

function countOccurrences(arr, target) {
  const first = firstOccurrence(arr, target);
  if (first === -1) return 0; // target not found
  const last = lastOccurrence(arr, target);
  return last - first + 1;
}

// Example:
let arr = [1, 1, 2, 2, 2, 2, 2, 3];
let target = 2;
console.log(countOccurrences(arr, target)); // Output: 3
