/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
      let xpol = x + "";
return x == xpol.split("").reverse().join("") ? true : false;
};