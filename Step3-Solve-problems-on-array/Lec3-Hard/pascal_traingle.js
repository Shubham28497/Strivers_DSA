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

// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.
function pascalTraingle(n){
    for(let row=0;row<n;row++){
        let val=1;
        let rowStr="";
        for(let col=0;col<=row;col++){
            rowStr+=val+" ";
            val=val*(row-col)/(col+1)
        }
        console.log(rowStr)
    }
}
pascalTraingle(6)

// Row 0:
// row = 0

// val = 1

// Inner loop:

// col = 0 → rowStr = "1 " → Update val = val * (0 - 0) / (0 + 1) = 1 * 0 / 1 = 0

// console.log("1")

// ✔️ Output:

// Copy
// Edit
// 1
// ✅ Row 1:
// row = 1

// val = 1

// Inner loop:

// col = 0 → rowStr = "1 " → val = 1 * (1 - 0) / (0 + 1) = 1

// col = 1 → rowStr = "1 1 " → val = 1 * (1 - 1) / (1 + 1) = 0

// console.log("1 1")

// ✔️ Output:

// Copy
// Edit
// 1
// 1 1
// ✅ Row 2:
// row = 2

// val = 1

// Inner loop:

// col = 0 → rowStr = "1 " → val = 1 * (2 - 0) / 1 = 2

// col = 1 → rowStr = "1 2 " → val = 2 * (2 - 1) / 2 = 1

// col = 2 → rowStr = "1 2 1 " → val = 1 * (2 - 2) / 3 = 0

// console.log("1 2 1")

// ✔️ Output:

// Copy
// Edit
// 1
// 1 1
// 1 2 1
// ✅ Row 3:
// row = 3

// val = 1

// Inner loop:

// col = 0 → rowStr = "1 " → val = 1 * 3 / 1 = 3

// col = 1 → rowStr = "1 3 " → val = 3 * 2 / 2 = 3

// col = 2 → rowStr = "1 3 3 " → val = 3 * 1 / 3 = 1

// col = 3 → rowStr = "1 3 3 1 " → val = 0

// console.log("1 3 3 1")

// ✔️ Output:

// Copy
// Edit
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// ✅ Row 4:
// row = 4

// val = 1

// Inner loop:

// col = 0 → rowStr = "1 " → val = 1 * 4 / 1 = 4

// col = 1 → rowStr = "1 4 " → val = 4 * 3 / 2 = 6

// col = 2 → rowStr = "1 4 6 " → val = 6 * 2 / 3 = 4

// col = 3 → rowStr = "1 4 6 4 " → val = 4 * 1 / 4 = 1

// col = 4 → rowStr = "1 4 6 4 1 " → val = 0

// console.log("1 4 6 4 1")

// ✔️ Final Output:

// Copy
// Edit
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

//TC:O(n)
//SC:O(1)