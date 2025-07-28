class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
    for (let s of strs) {
        result += s.length + '#' + s
    }
    return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i=0
        while (i < str.length) {
            let j = i
            while (str[j] !== '#') {
                j++
            }
            let l = parseInt(str.substring(i,j));
            i = j+ 1;
            j= i + l;
            result.push(str.substring(i,j));
            i= j;
        }
        return result
    }
}
