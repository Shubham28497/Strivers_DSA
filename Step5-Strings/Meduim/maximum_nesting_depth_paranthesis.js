// Example 1:
// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation:
// Digit 8 is inside of 3 nested parentheses in the string.
// Example 2:
// Input: s = "(1)+((2))+(((3)))"
// Output: 3
// Explanation:
// Digit 3 is inside of 3 nested parentheses in the string.

function maxParenthesisDepth (s){
 let depth=0;
 let maxDepth=0;
 for(let ch of s){
     if(ch==='('){
         depth++;
         maxDepth=Math.max(maxDepth,depth)
     }
     else if(ch===')'){
         depth--;
         if(depth<0){
             return -1;
         }
     }
 }
 return depth===0?maxDepth:-1
}
console.log(maxParenthesisDepth("(1+(2*3)+((8)/4))+1")); // Output: 3
console.log(maxParenthesisDepth("(1)+((2))+(((3)))"));   // Output: 3
console.log(maxParenthesisDepth("1+(2*3)/(2-1)"));       // Output: 1
console.log(maxParenthesisDepth("((())"))               // Output: -1 (unbalanced)


