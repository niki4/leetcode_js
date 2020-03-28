/*
Runtime: 64 ms, faster than 80.73% of JavaScript online submissions for Add Strings.
Memory Usage: 37.3 MB, less than 12.50% of JavaScript online submissions for Add Strings.
*/

const int = val => parseInt(val)
const str = val => val.toString()

/**
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const maxLength = Math.max(num1.length, num2.length)
    num1 = num1.padStart(maxLength, 0)
    num2 = num2.padStart(maxLength, 0)
    let high = 0
    let resSum = ''

    for (let i = maxLength-1; i >= 0; i--) {
        const positionSum = int(num1[i]) + int(num2[i]) + high
        resSum = str(positionSum % 10) + resSum
        high = int(positionSum / 10)
    }
    return (high !== 0) ? high + resSum : resSum
};
