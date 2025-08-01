//sorted
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sortedS = s.split('').sort().join('');
        let sortedT = t.split('').sort().join('');
        if (sortedS == sortedT) {
            return true
        }
        else {
            return false
        }
        }
}
//hash table
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const countS = {};
    const countT = {};
    for (let i = 0; i<s.length; i++) {
        countS[s[i]] = (countS[s[i]]|| 0) + 1;
        countT[t[i]] = (countT[t[i]]|| 0) + 1;
    }
    for (const key in countS) {
        if (countS[key] !== countT[key]) {
            return false
        }
    }
    return true
};