// Input : nums = [4, 2, 2, 6, 4], k = 6
// Output : 4
// Explanation : The subarrays having XOR of their elements as 6 are [4, 2],  [4, 2, 2, 6, 4], [2, 2, 6], and [6]
// Input :nums = [5, 6, 7, 8, 9], k = 5
// Output : 2
// Explanation : The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]

function countSubarraysWithXorK(arr,k){
    let count=0;
    for(let i=0;i<arr.length;i++){
        let xor=0;
        for(let j=i;j<arr.length;j++){
            xor^=arr[j]
            if(xor==k){
                count++
            }
        }
    }
    return count;
}
let arr=[4, 2, 2, 6, 4]
let k=6
console.log(countSubarraysWithXorK(arr,k))