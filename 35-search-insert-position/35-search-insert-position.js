/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    nums.push(target);
    nums.sort((a,b) => a-b);
    for (i=0;i<nums.length; i++) {
        if (nums[i] === target) {
            return i;
            break;
        }
    }
};