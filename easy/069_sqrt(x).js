/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
*/

/**
 * @param {number} x
 * @return {number}
 */

 /*
Simplest and clearest solution (albeit not fastest one) using Math object.

Runtime: 80 ms, faster than 77.96% of JavaScript.
Memory Usage: 35.4 MB, less than 91.96% of JavaScript.
 */
 var mySqrt = function(x) {
 	return Math.floor(Math.sqrt(x));
 };


/*
"Digit-by-digit calculation for binary base" algorithm adoption for JS.
https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Binary_numeral_system_(base_2)

Surprisingly, it fast exactly as Math.sqrt method and takes slightly more memory.

Runtime: 80 ms, faster than 77.96% of JavaScript.
Memory Usage: 35.5 MB, less than 62.50% of JavaScript.
*/
var mySqrt2 = function(x) {
    let res = 0;
    let bit = 1 << 30; // 32bit
    
    while (bit > x) {  // "bit" starts at the highest power of four <= the argument.
        bit >>= 2;
    }
    
    while (bit !== 0) {
        if (x >= res + bit) {
            x -= res + bit;
            res = (res >> 1) + bit;
        } else {
            res >>= 1;
        }
        bit >>= 2;
    }
    
    return res;
};