// Examples:

// Example 1:
// Input: array[] = {10,5,10,15,10,5};
// Output: 10 15
// Explanation: The frequency of 10 is 3, i.e. the highest and 
// the frequency of 15 is 1 i.e. the lowest.

function findHighLowFrequency(arr) {
    const visited = [];
    let maxFreq = -Infinity;
    let minFreq = Infinity;
    let maxElem, minElem;
  
    for (let i = 0; i < arr.length; i++) {
      if (visited.includes(arr[i])) continue;
  
      let count = 1;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
  
      visited.push(arr[i]);
  
      if (count > maxFreq) {
        maxFreq = count;
        maxElem = arr[i];
      }
  
      if (count < minFreq) {
        minFreq = count;
        minElem = arr[i];
      }
    }
  
    console.log("Highest frequency element:", maxElem);
    console.log("Lowest frequency element:", minElem);
  }
  // Example
  findHighLowFrequency([10, 5, 10, 15, 10, 5,]);
  