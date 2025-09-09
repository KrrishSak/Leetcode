/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    return Math.max(countNegatives(nums), countPositives(nums));
}

function countNegatives(nums){
    let low = 0, high = nums.length-1;
    while(low <= high){
        let mid = Math.ceil((low+high)/2);
        if(nums[mid] < 0){
            low = mid+1;
        } else {
            high = mid-1;
        }
    }
    return high+1;
}

function countPositives(nums){
    let low = 0, high = nums.length-1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] <= 0){ 
            low = mid+1;
        } else {
            high = mid-1;
        }
    }
    return nums[nums.length-1] <= 0 ? 0 : nums.length - low;
}
