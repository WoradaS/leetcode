/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // if(k == 0) return 
    // if(nums.length >= k) {
    //     nums.splice(0, 0, ...nums.slice(-k));
    //     nums.splice(-k)
    // } else{
    //     for(let i = 0; i < k; i ++){
    //         nums.unshift(nums.pop())
    //     }
    // }

    // or

    if(nums.length <= k){
        k = k - nums.length;
    }
    return nums.unshift(...nums.splice(nums.length-k)) 
};