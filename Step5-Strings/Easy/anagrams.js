// Input : s = "anagram" , t = "nagaram"

// Output : true

// Explanation : We can rearrange the characters of string s to get string t as frequency of all characters from both strings is same.
function areAnagrams (s1,s2){
return s1.split('').sort().join()===s2.split('').sort().join()
}
const s1 = "geeks";
const s2 = "kseeg";
console.log(areAnagrams(s1, s2));
// Time Complexity: O(m*log(m) + n*log(n))