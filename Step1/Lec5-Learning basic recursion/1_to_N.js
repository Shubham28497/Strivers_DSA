// Problem: Print from 1 to N using Recursion

function print1toN(n){
function helper(i){
    if(i>n)
        return;
    console.log(i)
    helper(i+1)
}
    helper(1)
}
print1toN(4)