var lengthOfLongestSubstring = function(s) {
    let subString = ""
    let res = []

    for( let i = 0; i< s.length; i++){
        if (subString.includes(s[i])){
            res.push(subString)
            subString = ""
        }

        subString += s[i]
    }
    

    return subString.length
};

console.log( lengthOfLongestSubstring('pwwkewsw') )