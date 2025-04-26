// Input: n = 6

// Output = [1, 2, 3, 6]

// Explanation: The divisors of 6 are 1, 2, 3, 6.
var printDiv= function(x){
    for(let i=1;i<=x;i++){
        if(x%i===0){
        console.log(i)
        }
    }
 
}
printDiv(36)