/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) {
        return false
    }
    x = x.toString()
    let digitLen = x.length
    if (digitLen === 2 && x[0]===x[1]) {
            return true
        }
    if (digitLen === 2 && x[0]!==x[1]) {
        return false
    }
    for (let i=0; i<digitLen; i++ ){
        if(x[i] !== x[digitLen-1]){
            return false
        }
        digitLen--
    }
    return true
};