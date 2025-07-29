/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashMap = new Map()
        for (let str of strs) {
            let count = new Array(26).fill(0)
            for (let c of str) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] ++
            }
            const key = count.join(',');
            if (!hashMap.has(key)) {
                hashMap.set(key,[]);
            }
            hashMap.get(key).push(str)
        }
        return Array.from(hashMap.values())
};