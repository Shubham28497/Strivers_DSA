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
