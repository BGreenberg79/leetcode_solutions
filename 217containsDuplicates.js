// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */
//     hasDuplicate(nums) {
//         let numbers = []
//         for (let i=0; i<nums.length; i++ ) {
//             if (numbers.includes(nums[i])) {
//                 return true
//             } 
//             else {
//                 numbers.push(nums[i])
//             }
//         }
//         return false
//     }
// }


// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     nums.sort((a,b)=>a-b)
//         for (let i=1; i<nums.length; i++ ) {
//             if (nums[i] === nums[i-1]){
//                 return true}}
//         return false
// };
//hash solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let hashTable = new Set();
        for (let i=0; i<nums.length; i++) {
            if (hashTable.has(nums[i])) {
                return true
            }
            hashTable.add(nums[i])
        } 
        return false
};