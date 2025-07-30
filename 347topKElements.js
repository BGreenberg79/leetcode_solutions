/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
     let count = new Map();
        const freq = Array.from ({ length: nums.length + 1}, () => []);
        for (let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        for (let [num, c] of count) {
            freq[c].push(num);
        }
        const res = [];
        for (let i = freq.length-1; i>0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res
                }
            }
        }
};