/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits.reverse()
    for (let i =0; i<digits.length; i++) {
        if (digits[i]<9) {
            digits[i]+=1
            return digits.reverse()
        }
        digits[i] = 0
    }
    digits.push(1);
    return digits.reverse()
}