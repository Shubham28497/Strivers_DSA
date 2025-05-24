// Given an integer array nums of even length consisting of an 
// equal number of positive and negative integers.Return the answer array 
// in such a way that the given conditions are met:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were 
// present in nums is preserved.
// The rearranged array begins with a positive integer.
// Examples:
// Input : nums = [2, 4, 5, -1, -3, -4]
// Output : [2, -1, 4, -3, 5, -4]
// Explanation: The positive number 2, 4, 5 maintain their relative positions and -1, -3, -4 
// maintain their relative positions
// Input : nums = [1, -1, -3, -4, 2, 3]
// Output : [1, -1, 2, -3, 3, -4]
// Explanation: The positive number 1, 2, 3 maintain their relative positions and -1, -3, -4 
// maintain their relative positions
// 1. Brute force this will work if array has equal no of pos and neg elments
function rearrange(arr){
    let pos=[]
    let neg=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            pos.push(arr[i])
        }
        else{
            neg.push(arr[i])
        }
    }
    for(let i=0;i<Math.floor(arr.length/2);i++){
        arr[2*i]=pos[i]
        arr[2*i+1]=neg[i]
    }
    return arr
  }
  let arr= [1, 2, -4, -5]
  console.log(rearrange(arr))
  //TC: O(n)

//   2.Slightly optimal approach
function rearrange(arr){
    let result=[]
    let posIndex=0;
    let negIndex=1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            result[negIndex]=arr[i]
            negIndex+=2
        }
        else{
            result[posIndex]=arr[i]
            posIndex+=2
        }
    }
    return result
  }
  let arr2= [1, 2, -4, -5,-6,-8,5,2]
  console.log(rearrange(arr2))

  //2. 2Variety
  //If positive and -ve elements are not equal in an array 
//   arr=[1,2,-5,8,-3,2,6]