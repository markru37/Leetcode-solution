/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    let res = new Map;
    for (let i = 0; i < nums.length; i++){
        let remain = target - nums[i];
        if(res.get(remain) !== undefined ){
            return[i , res.get(remain)];
        }
        res.set(nums[i], i);
    }
};