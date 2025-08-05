// Problem Statement: This problem has 3 variations. They are stated below:

// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

// Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.

// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.

// Variation 1:nCr = n! / (r! * (n-r)!)

function nCr(n,r){
    if(r>n) return 0;
    let res=1;
    for(let i=0;i<r;i++){
        res=res*(n-i);
        res=res/(i+1);
    }
    return res;
}
const row=5;
const col=3;
console.log(nCr(row,col))

// TC:O(r)
// SC:O(1) 

// Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.
function nCr(n, r) {
  let res = 1;

  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = res / (i + 1);
  }

  return res;
}

function pascalTriangle(n) {
  const row = [];

  // Build the nth row (0-based index)
  for (let c = 0; c < n; c++) {
    row.push(nCr(n - 1, c));
  }

  // Print the entire row as space-separated values
  console.log(`Row ${n} of Pascal's Triangle:`, row.join(' '));
}

// Example usage:
const n = 6;
pascalTriangle(n);
// TC:O(r)
// SC:O(1) 