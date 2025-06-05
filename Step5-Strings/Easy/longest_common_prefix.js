// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
function longestCommonPrefix (str){
    if(!str.length){
        return false;
    }
    for(let i=0;i<str[0].length;i++){
        let char=str[0][i];
        for(let j=1;j<str.length;j++){
            if(str[j][i]!==char){
                return str[0].substring(0,i)
            }
        }
    }
    return str[0]
    //means: If no mismatch found, the entire first string is the longest common prefix.
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); 


