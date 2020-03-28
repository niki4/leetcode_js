/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Example 1: 123 -> 321
 * Example 2: -123 -> -321
 *
 * Runtime: 80 ms, faster than 40.85% of JavaScript online submissions for Reverse Integer.
 * Memory Usage: 35.7 MB, less than 86.46% of JavaScript online submissions for Reverse Integer.
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversed = Math.abs(x).toString().split('').reverse().join('');
    const min_int32 = (1 << 31) - 1; // it's js specific, for python it's max int
    const max_int32 = (1 << 31) - 1 >>> 0; // 2147483647

    const result = parseInt(reversed);
    if (result < min_int32 || result > max_int32) {
        return 0
    }

    return x > 0 ? result : -result
};
