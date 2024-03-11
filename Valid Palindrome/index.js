/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // const regex = /[a-z0-9]/g;
    // const forward  = s.toLowerCase().match(regex) ?? [];
    // return forward.join("").trim() == forward.reverse().join("").trim()

    //  or

    const regex = /[a-z0-9]/g;
    const forward  = s.toLowerCase().match(regex) ?? [];
    for(let i = 0; i < forward.length; i++){
        if(forward[i] === forward[forward.length -i -1]) continue
        return false
    }
    return true
};