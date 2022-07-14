/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
      let xpol = x + "";
      xpol = xpol.split("").reverse().join("");
    if (xpol == x) {
        return true;
    } else {
        return false;
    }
};