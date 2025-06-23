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
// Step 4: right = 3, s[right] = 'a'
// 'a' is already in seen → we must shrink window from left

// Remove s[left] = 'a' → seen = {'b', 'c'} → left = 1

// Now 'a' not in seen, so add 'a' → seen = {'a', 'b', 'c'}

// Window: s[1...3] = 'bca'

// maxLength = max(3, 3 - 1 + 1) = 3

// Step 5: right = 4, s[right] = 'b'
// 'b' is in seen → remove s[left] = 'b' → seen = {'a', 'c'} → left = 2

// Now add 'b' → seen = {'a', 'b', 'c'}

// Window: s[2...4] = 'cab'

// maxLength = max(3, 4 - 2 + 1) = 3

// Step 6: right = 5, s[right] = 'c'
// 'c' is in seen → remove s[left] = 'c' → seen = {'a', 'b'} → left = 3

// Add 'c' → seen = {'a', 'b', 'c'}

// Window: s[3...5] = 'abc'

// maxLength = max(3, 5 - 3 + 1) = 3

// Step 7: right = 6, s[right] = 'b'
// 'b' is in seen → remove s[left] = 'a' → seen = {'b', 'c'} → left = 4

// Remove s[left] = 'b' → seen = {'c'} → left = 5

// Add 'b' → seen = {'c', 'b'}

// Window: s[5...6] = 'cb'

// maxLength = max(3, 6 - 5 + 1) = 3

// Step 8: right = 7, s[right] = 'b'
// 'b' is in seen → remove s[left] = 'c' → seen = {'b'} → left = 6

// Remove s[left] = 'b' → seen = {} → left = 7

// Add 'b' → seen = {'b'}

// Window: s[7...7] = 'b'

// maxLength = max(3, 7 - 7 + 1) = 3