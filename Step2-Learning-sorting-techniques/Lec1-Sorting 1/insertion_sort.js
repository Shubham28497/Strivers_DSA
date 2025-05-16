//Take an element and place it in its correct order
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; // Shift right
        j--;
      }
  
      arr[j + 1] = key; // Insert key in correct place
    }
    return arr;
  }
  arr = [8, 4, 1, 5, 2]
  console.log(insertionSort(arr))