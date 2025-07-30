class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const store = new Set(nums);
        for (let num of store) {
            if (!store.has(num-1)) {
                let length = 1
                while (store.has(num+length)) {
                    length++
                }
                longest = Math.max(longest,length);
            }
    } return longest
}
}