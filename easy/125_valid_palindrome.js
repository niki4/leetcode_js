/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */

/*
Runtime: 88 ms, faster than 57.56% of JavaScript.
Memory Usage: 36.8 MB, less than 85.82% of JavaScript.
Complexity: O(n/2)
*/
var isPalindrome = function(s) {
    var src = s.toString().toLowerCase().replace(/[^0-9a-z]/gi, '')
    fullLen = src.length
    halfLen = +(fullLen/2)
    
    for ( let i = 0; i < halfLen; i++ ) {
        if ( src[i] != src[fullLen-1-i] ) {
            return false;
        }
    }
    return true;
};