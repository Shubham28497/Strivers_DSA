// Input: mat[][] = {{1, 2, 3},
//                              {4, 5, 6},
//                              {7, 8, 9}}
// Output: {{7, 4, 1}, 
//                 {8, 5, 2}, 
//                 {9, 6, 3}} 
function rotate(matrix){
    let n=matrix.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
        }
    }
    for(let i=0;i<n;i++){
        matrix[i].reverse();    
    }
}
let matrix = [
  [100, 4, 200],
  [1, 3, 2],
  [7, 8, 9]
];

rotate(matrix);
console.log(matrix);
//TC:O(n^2)
//SC:O(1)