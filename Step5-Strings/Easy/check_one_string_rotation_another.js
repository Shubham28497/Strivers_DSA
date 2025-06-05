// Input: s1 = "abcd", s2 = "cdab"
// Output: true
// Explanation: After 2 right rotations, s1 will become equal to s2.

// Input: s1 = "aab", s2 = "aba"
// Output: true
// Explanation: After 1 left rotation, s1 will become equal to s2.

// Input: s1 = "abcd", s2 = "acbd"
// Output: false
// Explanation: Strings are not rotations of each other.
function isRotationConcat (str1,str2){
    if(str1.length!==str2.length){
        return false
    }
    return (str1+str1).includes(str2)
   
}
console.log(isRotationConcat("waterbottle", "erbottlewat")); // true
console.log(isRotationConcat("hello", "lohel"));             // true
console.log(isRotationConcat("hello", "helol"));             // false


