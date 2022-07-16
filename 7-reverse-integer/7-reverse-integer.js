/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x + '';
    if (x > 0) x = x.split('').reverse().join('').replace(/^0+/, '');
    else
        x = -x
            .split('')
            .reverse()
            .join('')
            .substring(0, x.length - 1);
    if (x >= Math.pow(-2, 31) && x <= Math.pow(2, 31) - 1) return x;
    else return 0;
};