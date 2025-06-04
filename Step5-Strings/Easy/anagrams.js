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

function areAnagrams (s1,s2){
    if(s1.length!==s2.length){
        return false
    }
let freq=new Array(26).fill(0)
for(let ch of s1){
    freq[ch.toLowerCase().charCodeAt(0)-'a'.charCodeAt(0)]++;
}
for(let ch of s2){
    freq[ch.toLowerCase().charCodeAt(0)-'a'.charCodeAt(0)]--;
}
 for (let count of freq) {
        if (count !== 0) return false;
    }

    return true;
}
const s3 = "geeks";
const s4 = "kseeg";
console.log(areAnagrams(s3, s4));
