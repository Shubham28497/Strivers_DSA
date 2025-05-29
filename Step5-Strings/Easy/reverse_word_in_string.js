// Input: s = "welcome to the jungle"
// Output: "jungle the to welcome"
// Input: s = " amazing coding skills "
// Output: "skills coding amazing"
function reverseString(s){
    let words= s.split(' ')
    let res=[]
    for(let i=words.length-1;i>=0;i--){
        if(words[i]){
            res.push(words[i])
        }
    }
    return res.join(' ')
   
}
let s = "  Hello   world from   JS  ";
console.log(reverseString(s));

// 2.Reverse each Character
function reverseString(str){
     let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
   
}
let str = "Hello world";
console.log(reverseString(str));