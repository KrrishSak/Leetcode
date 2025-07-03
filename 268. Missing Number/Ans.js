var missingNumber = function(nums) {
    let n=nums.length;
    let expectedSUM = (n*(n+1))/2;
    let actualSum=0;
    
    for(let i=0;i<n;i++){
        actualSum+=nums[i];
    }
    return expectedSUM - actualSum
};