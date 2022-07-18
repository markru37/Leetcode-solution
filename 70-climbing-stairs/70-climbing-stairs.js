/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let one = 1,
        two = 2,
        three = 0;
    if (n === 1) {
        return n;
    } else {
        for (i = 2; i < n; i++) {
            three = two;
            two += one;
            one = three;
        }
        return two;
    }
};