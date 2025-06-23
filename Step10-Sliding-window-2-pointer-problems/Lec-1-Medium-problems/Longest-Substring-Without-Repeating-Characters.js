// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1
function lengthOfLongestSubstring(s){
let left=0;
let maxLength=0;
let set=new Set()
for(let right=0;right<s.length;right++){
    while(set.has(s[right])){
        set.delete(s[left])
        left++
    }
    set.add(s[right])
    maxLength=Math.max(maxLength,right-left+1)
}
return maxLength
}
let s="abcabcbb"
console.log(lengthOfLongestSubstring(s))