function isSorted(arr){
for(let i=1;i<arr.length;i++){
    if(arr[i]<arr[i-1]){
        return false
    }
}
return true
}
console.log(isSorted([1, 2, 3, 4, 5]));     // true
console.log(isSorted([1, 2, 2, 3]));        // true
console.log(isSorted([5, 3, 1]));           // false
console.log(isSorted([10]));               // true (single element)
console.log(isSorted([]));                 // true (empty array is trivially sorted)
//TC: O(n)
//SC: O(1)