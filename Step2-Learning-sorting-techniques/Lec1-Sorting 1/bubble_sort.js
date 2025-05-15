//Push the max to the last by adjacent swaps
function bubbleSort(arr){
    let n=arr.length
    for(let i=0;i<n-1;i++){ 
    //We need n-1 passes because:
// In each pass, one largest element bubbles to the correct position.
// After n-1 passes, the array will be sorted.
        for(let j=0;j<n-1-i;j++){
// After each pass, the largest element is already at the end.
// So we can avoid re-checking the end part that’s already sorted.
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}
const arr = [5, 1, 4, 2, 8];
console.log(bubbleSort(arr));
