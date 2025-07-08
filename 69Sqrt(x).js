/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x<2) return x;
    let left =1
    let right = x
    let result = 0;
    while (left <= right) {
        const mid = Math.floor((left+right)/2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result
};