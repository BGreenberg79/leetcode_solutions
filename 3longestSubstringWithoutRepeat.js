/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
        let maxS =0;
        let hash = new Set()
        for (let r =0; r<s.length;r++) {
            while (hash.has(s[r])) {
                hash.delete(s[l]);
                l++
            }
            hash.add(s[r]);
            maxS =Math.max(maxS, r-l+1)}
        return maxS
};