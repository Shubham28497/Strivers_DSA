// Input : s = "tree"

// Output : ['e', 'r', 't' ]

// Explanation : The occurrences of each character are as shown below :

// e --> 2

// r --> 1

// t --> 1.

// The r and t have same occurrences , so we arrange them by alphabetic order.

// Input : s = "raaaajj"

// Output : ['a' , 'j', 'r' ]

// Explanation : The occurrences of each character are as shown below :

// a --> 4
function sortByFrequency (str){
   const freq={}
for(let ch of str){
 freq[ch]=(freq[ch]||0)+1  
}
// Loop iteration:
// 't': freq = { t: 1 }
// 'r': freq = { t: 1, r: 1 }
// 'e': freq = { t: 1, r: 1, e: 1 }
// 'e': freq = { t: 1, r: 1, e: 2 }
return Object.entries(freq)
//// → [ ['t', 1], ['r', 1], ['e', 2] ]
.sort((a,b)=>b[1]-a[1])
// → sorted by frequency: [ ['e', 2], ['t', 1], ['r', 1] ] 
// (or ['e', 2], ['r', 1], ['t', 1] — order of equal items may vary)
.map(([char,count])=>char.repeat(count))
//Take a 2-item array (like ['e', 2])
// Use destructuring: char = 'e', count = 2
// Return: 'e'.repeat(2) → 'ee'
.join("")
}

console.log(sortByFrequency("raaaajj"));

