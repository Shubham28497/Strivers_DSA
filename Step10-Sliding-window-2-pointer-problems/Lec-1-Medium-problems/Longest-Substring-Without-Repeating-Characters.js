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
//TC:O(n)
// Step 1: right = 0, s[right] = 'a'
// 'a' not in seen → add 'a' → seen = {'a'}

// Window: s[0...0] = 'a'

// Update maxLength = max(0, 0 - 0 + 1) = 1
// Step 2: right = 1, s[right] = 'b'
// 'b' not in seen → add 'b' → seen = {'a', 'b'}

// Window: s[0...1] = 'ab'

// Update maxLength = max(1, 1 - 0 + 1) = 2

// Step 3: right = 2, s[right] = 'c'
// 'c' not in seen → add 'c' → seen = {'a', 'b', 'c'}

// Window: s[0...2] = 'abc'

// Update maxLength = max(2, 2 - 0 + 1) = 3