// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
function fourSum(arr,target) {
const result=[];
arr.sort((a,b)=>a-b);
for(let i=0;i<arr.length-3;i++){
    if(i>0 && arr[i]==arr[i-1]) continue;
    for(let j=i+1;j<arr.length-2;j++){
        if(j>i+1 && arr[j]==arr[j-1]) continue;
        let left=j+1;
        let right=arr.length-1;
        while(left<right){
            const sum=arr[i]+arr[j]+arr[left]+arr[right]
            if(sum===target){
            result.push([arr[i],arr[j],arr[left],arr[right]])
        while(left<right && arr[left]=== arr[left+1]) left++
        while(left<right && arr[right]=== arr[right+1]) right--
        left++;
        right--
            }
            else if(sum<target){
                left++;
            }
            else{
                right--
            }
        }
    }
}
return result
}
let arr = [1,0,-1,0,-2,2];
let target=0;
console.log(fourSum(arr,target));
// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

