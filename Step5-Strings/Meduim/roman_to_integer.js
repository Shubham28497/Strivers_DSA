// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
function romanToInt (s){
 const myMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let result =0;
    for(let i=0;i<s.length;i++){
        let curr=myMap[s[i]];
        let next=myMap[s[i+1]];
        if(next && curr<next){
            result+=next-curr
            i++
        }
        else{
            result+=curr;
        }
    }
  return result
}
console.log(romanToInt("MCMXCIV"));

