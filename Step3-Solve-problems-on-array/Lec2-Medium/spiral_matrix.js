// Input: matrix = [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]]

// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Explanation: The elements in the spiral order are 1, 2, 3 -> 6, 9 -> 8, 7 -> 4, 5

// Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8]]

// Output: [1, 2, 3, 4, 8, 7, 6, 5]

// Explanation: The elements in the spiral order are 1, 2, 3, 4 -> 8, 7, 6, 5
function spiralOrder(matrix) {
  if (!matrix.length) return [];

  let result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right on top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Traverse from top to bottom on right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      // Traverse from right to left on bottom row
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      // Traverse from bottom to top on left column
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];

console.log(spiralOrder(matrix));
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
//TC:O(m*n)
//SC:O(m*n)