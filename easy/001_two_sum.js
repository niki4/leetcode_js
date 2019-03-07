/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
 /*
Runtime: 204 ms, faster than 15.80% of JavaScript.
Memory Usage: 34.6 MB, less than 72.84% of JavaScript.
 */
var twoSum = function(nums, target) {
    result = new Array()
    for (i=0; i<nums.length; i++) {
        for (j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i
                result[1] = j
            }
        }
    }
    return result
};

/*
Runtime: 128 ms, faster than 41.27% of JavaScript.
Memory Usage: 34.7 MB, less than 56.74% of JavaScript.
*/
var twoSum2 = function(nums, target) {
    for (i=0; i<nums.length; i++) {
        otherPart = target - nums[i];
        otherPartIdx = nums.indexOf(otherPart, i+1);
        if (otherPartIdx != -1) {     
            return [i, otherPartIdx];
        }
    }
    return []
};
