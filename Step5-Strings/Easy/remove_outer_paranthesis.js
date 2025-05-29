// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
function removeOuterParentheses (s){
   let res='';
   let open=0;
   for(let char of s){
       if(char==='('){
           if(open>0){
               res=res+char;
           }
           open++
       }
       else if(char===')'){
           open--
           if(open>0){
               res=res+char
           }
       }
   }
   return res
}
let s = "(()())(())"
console.log(removeOuterParentheses(s))
// | Index | Char | open (before) | Action                                      | open (after) | result     |
// | ----- | ---- | ------------- | ------------------------------------------- | ------------ | ---------- |
// | 0     | `(`  | 0             | skip adding, increment open                 | 1            | `""`       |
// | 1     | `(`  | 1             | add `(` to result                           | 2            | `"("`      |
// | 2     | `)`  | 2             | decrement open, add `)` to result           | 1            | `"()"`     |
// | 3     | `(`  | 1             | add `(` to result                           | 2            | `"()("`    |
// | 4     | `)`  | 2             | decrement open, add `)` to result           | 1            | `"()()"`   |
// | 5     | `)`  | 1             | decrement open, skip adding (outermost `)`) | 0            | `"()()"`   |
// | 6     | `(`  | 0             | skip adding (outermost `(`), increment open | 1            | `"()()"`   |
// | 7     | `(`  | 1             | add `(` to result                           | 2            | `"()()("`  |
// | 8     | `)`  | 2             | decrement open, add `)` to result           | 1            | `"()()()"` |
// | 9     | `)`  | 1             | decrement open, skip adding                 | 0            | `"()()()"` |
