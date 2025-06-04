// Input : s = "egg" , t = "add"

// Output : true

// Explanation : The 'e' in string s can be replaced with 'a' of string t.

// The 'g' in string s can be replaced with 'd' of t.

// Hence all characters in s can be replaced to get t.

// Input : s = "apple" , t = "bbnbm"

// Output : false

// Explanation : It can be proved that no solution exists for this example.

// All the "b"s in t have to take places of "a", "p", "l", which requires "p" to be mapped to "b", but that
//  makes it impossible for "p" at index 2 (0-indexed) to become "n". Thus no solution exists

function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapS = new Array(256).fill(0);
    const mapT = new Array(256).fill(0);

    for (let i = 0; i < s.length; i++) {
        const codeS = s.charCodeAt(i);
        const codeT = t.charCodeAt(i);

        if (mapS[codeS] !== mapT[codeT]) return false;

        mapS[codeS] = i + 1;
        mapT[codeT] = i + 1;
    }

    return true;
}
//TC:O(n)