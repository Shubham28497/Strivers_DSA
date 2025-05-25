// Examples:
// Input: nums = [1, 2, 5, 3, 1, 2]

// Output: [5, 3, 2]

// Explanation: 2 is the rightmost element, 3 is the largest element in
//  the index range [3, 5], 5 is the largest element in the index range [2, 5]

// Input: nums = [-3, 4, 5, 1, -4, -5]

// Output: [5, 1, -4, -5]

// Explanation: -5 is the rightmost element, -4 is the largest element 
// in the index range [4, 5], 1 is the largest element in the 
// index range [3, 5] and 5 is the largest element in the range [2, 5]
function leadersInArray(arr){
    let leaders=[]
    for(let i=0;i<arr.length;i++){
        isLeader=true;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>=arr[i]){
                isLeader=false;
                break;
            }
        }
        if(isLeader){
            leaders.push(arr[i])
        }
    }
    return leaders
}
let arr=[1, 2, 5, 3, 1, 2]
console.log(leadersInArray(arr))
//TC:O(n^2)
// 2.better approach
function leadersInArray(arr){
    let result=[]
    let maxLeader=arr[arr.length-1]
    result.push(maxLeader)
    for(let i=arr.length-2;i>0;i--){
        if(arr[i]>=maxLeader){
            maxLeader=arr[i]
            result.push(maxLeader)
        }
    }
    // result.reverse()
    return result
}
let arr2=[1, 2, 5, 3, 1, 2]
console.log(leadersInArray(arr2))