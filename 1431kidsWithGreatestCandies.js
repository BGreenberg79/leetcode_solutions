/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let copy = []
    copy = candies.slice().sort((a,b) => b-a)
    let result = []
    for (let i = 0; i<candies.length; i++){
        let withExtra = candies[i] + extraCandies
        if (withExtra>=copy[0]) {
            result.push(true)
        }
        else {
            result.push(false)
        }
    }
    return result
};

// better time complexiy
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var secondKidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let result = [];
    for (let i = 0; i<candies.length; i++){
        result.push(candies[i] + extraCandies >= max)
    }
    return result
}