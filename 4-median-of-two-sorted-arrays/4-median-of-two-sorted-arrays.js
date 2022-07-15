/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const res = [].concat(nums1, nums2);
    let median = 0;
    res.sort((a, b) => a - b);
    if (res.length % 2 === 0) {
        median = (res[Math.round(res.length / 2)] + res[Math.round((res.length - 2) / 2)]) / 2;
    } else {
        median = res[Math.round((res.length - 2) / 2)];
    }
    return median;
};