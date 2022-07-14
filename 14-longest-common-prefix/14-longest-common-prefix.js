/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs = strs.concat().sort();
    substr1 = strs[0];
    substr2 = strs[strs.length - 1];
    (L = substr1.length), (i = 0);
    while (i < L && substr1.charAt(i) === substr2.charAt(i)) i++;
    return substr1.substring(0, i);
};