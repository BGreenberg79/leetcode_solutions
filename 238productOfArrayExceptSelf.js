class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = new Array(nums.length).fill(1)
        for (let i=1; i<nums.length;i++) {
            arr[i] = arr[i-1] * nums[i-1];
        }
        let postFix=1;
        for (let i = nums.length-1; i >=0; i--) {
            arr[i] *=postFix
            postFix *= nums[i];
        }
        return arr
        }
        }