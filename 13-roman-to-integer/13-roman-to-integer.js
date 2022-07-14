/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let sum = 0;
    let currentValue = 0;
    let nextValue = 0;

    for (i = 0; i < s.length; i++) {
        currentValue = dict[s[i]];

        if (i != s.length - 1) {
            nextValue = dict[s[i + 1]];

            if (currentValue < nextValue) {
                currentValue = nextValue - currentValue;
                i++;
            }
        }
        sum += currentValue;
    }
    return sum
};