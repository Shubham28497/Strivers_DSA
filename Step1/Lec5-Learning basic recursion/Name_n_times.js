// Problem: Print your Name N times using recursion

function printNnames(name,n){
    function helper(i){
        if(i>n)
            return;
        console.log(name)
        helper(i+1);
    }
    helper(1)
}

printNnames("Shubh",5)
// TC: O(N)