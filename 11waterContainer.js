/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
        let containerArea = 0
        let r = height.length-1;
        let l = 0
        let h = 0
        let w = 0;
        while (r>l) {
            h = height[l] <= height[r] ? height[l] : height[r];
            w = r-l
            if ((h*w)> containerArea) {
                containerArea= h*w
            }
            if (height[l]<= height[r]) {
                l++
            } else {
                r--
            }
        }
        return containerArea
    } 