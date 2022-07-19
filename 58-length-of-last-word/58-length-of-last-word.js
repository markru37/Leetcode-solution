/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arrayOfStrings = s.split(' ');
    for (i = arrayOfStrings.length - 1; i >= 0; i--) {
        if (arrayOfStrings[i].length != 0) {
            return arrayOfStrings[i].length;
        }
    }
};